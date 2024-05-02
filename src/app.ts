import { createServer } from 'http'
import { Envs } from './domain/config'
import { AppRoutes, ServerApp } from './presentation'
import { WssService } from './presentation/ws.server'

(() => {
  main()
})()

function main () {
  const server = new ServerApp({
    port: Envs.getEnvs.PORT
  })

  const httpServer = createServer(server.app)
  WssService.initWss({ server: httpServer })
  server.setAppRoutes(AppRoutes.getAppRoutes)

  httpServer.listen(Envs.getEnvs.PORT, () => {
    console.log(`WS running on PORT: ${Envs.getEnvs.PORT}`)
  })
}
