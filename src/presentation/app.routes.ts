import { Router } from 'express'
import { SelectRoutes } from './selects/selects.routes'

export class AppRoutes {
  public static get getAppRoutes () {
    const router = Router()

    router.use(SelectRoutes.getSelectRoutes)
    
    return router
  }
}
