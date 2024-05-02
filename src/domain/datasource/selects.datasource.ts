import { type CustomError, type CustomResponses} from '../custom-responses'
import { type SelectMessagesDTO } from '../dtos'

export abstract class SelectsDatasource {
    abstract selectMessagesSala (selectMessagesDTO: SelectMessagesDTO) : Promise<CustomResponses | CustomError>
}