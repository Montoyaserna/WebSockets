/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Server } from 'http'
import { WebSocket, WebSocketServer } from 'ws'

interface WssOptions {
  server: Server
  path?: string
}

export class WssService {
  private static _instance: WssService
  private readonly wss: WebSocketServer

  private constructor (wssOptions: WssOptions) {
    const { server, path = '/ws' } = wssOptions

    this.wss = new WebSocketServer({ server, path })
    this.start()
  }

  public static get getInstanceWssService () {
    if (!WssService._instance) {
      throw new Error('WssService is not initialized')
    }

    return WssService._instance
  }

  public static initWss (options: WssOptions) {
    WssService._instance = new WssService(options)
  }

  public sendMessagesAllClients (type: string, payload: Record<string, unknown>) {
    this.wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type, payload }))
      }
    })
  }

  public sendMessageClient (type: string, payload: Record<string, unknown>) {
    this.wss.on('connection', (ws: WebSocket) => {
      ws.send(JSON.stringify({ type, payload }))
    })
  }

  public start () {
    this.wss.on('connection', (ws: WebSocket) => {
      console.log('Client connected')
      ws.on('close', () => { console.log('Client disconected') })
    })
  }
}
