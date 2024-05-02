import express, { type Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import { Envs } from '../domain/config'

interface ServerOptions {
  port: number
  publicPath?: string
}

export class ServerApp {
  public readonly app = express()
  public readonly port: number
  public readonly publicPath: string

  constructor (serverOptions: ServerOptions) {
    const { port, publicPath = 'public' } = serverOptions

    this.port = port
    this.publicPath = publicPath

    this.configure()
  }

  private configure () {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(express.json())

    this.app.use(express.static(this.publicPath))
  }

  public setAppRoutes (router: Router) {
    this.app.use(Envs.getEnvs.CONTEXT_PATH, router)
  }
}
