import { type CustomError, type CustomResponses, type SelectMessagesDTO, SelectsRepository, SelectsDatasource } from '../../domain'

export class SelectRepositoryImp implements SelectsRepository {
    constructor (
        private readonly selectsDatasource: SelectsDatasource
    ){}

    public async selectMessagesSala (selectMessagesDTO: SelectMessagesDTO) : Promise<CustomResponses | CustomError> {
        return await this.selectsDatasource.selectMessagesSala(selectMessagesDTO)
    }
}