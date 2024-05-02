import { type Request, type Response } from 'express'
import { CustomError, CustomResponses, SelectMessagesDTO, type SelectsRepository, SelectMessagesSala} from '../../domain'

export class SelectController {
    constructor (
        private readonly selectRepository: SelectsRepository
    ){}

    public selectMessagesSala = (req: Request, res: Response) => {
        const [ errors, selectMessagesDTO] = SelectMessagesDTO.create(req.params)

        if (errors !== undefined) return CustomError.handleError(res, CustomError.badRequest(errors))
    
        new SelectMessagesSala(this.selectRepository)
            .execute(selectMessagesDTO!)
            .then(customReponse => CustomResponses.handleReponse(res, customReponse))
            .catch(error => CustomError.handleError(res, error))

    }
}