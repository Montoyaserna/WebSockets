import { Router } from 'express'
import { SelectController } from './selects.controller'
import { SelectDatasourceImpl, SelectRepositoryImp } from '../../infraestructure'

export class SelectRoutes {
  public static get getSelectRoutes () {
    const router = Router()

    const selectController = new SelectController(new SelectRepositoryImp(new SelectDatasourceImpl()))

    router.get('/selectMessages/:idSala', selectController.selectMessagesSala)

    return router
  }
}
