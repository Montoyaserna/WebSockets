import { type CustomError, type CustomResponses } from '../custom-responses'
import { type SelectMessagesDTO } from '../dtos'

export abstract class SelectsRepository {
    abstract selectMessagesSala (selectMessagesDTO: SelectMessagesDTO) : Promise<CustomResponses | CustomError>
}