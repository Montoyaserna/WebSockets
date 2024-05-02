import { poolCasandra, CustomError,  CustomResponses, type SelectsDatasource, type SelectMessagesDTO } from '../../domain'

export class SelectDatasourceImpl implements SelectsDatasource {
    public async selectMessagesSala (selectMessagesDTO: SelectMessagesDTO) : Promise<CustomResponses | CustomError> {
        const { idSala } = selectMessagesDTO

        const query = 'SELECT * FROM messages WHERE room = ? ALLOW FILTERING'
        const { rows } = await poolCasandra.execute(query, [idSala], { prepare: true })

        if (rows.length === 0) throw CustomError.selectNotFound()
        return CustomResponses.responseSelectOk(rows)
    }
}
