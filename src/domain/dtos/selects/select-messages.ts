import { z } from 'zod'
import { CommonsUtilities } from '../../adapters'

export class SelectMessagesDTO {
    private constructor(
        public readonly idSala: number
    ){}

    private static createSchema(){
        return z.object({
            idSala: z.number({
                invalid_type_error: CommonsUtilities.messageInvalidTypeErrorNumber('idSala'),
                required_error: CommonsUtilities.messageRequireError('idSala')
            })
        })
    }

    private static validationSchema (props: Record<string, any>) {
        return this.createSchema().safeParse(props)
    }

    public static create (props: Record<string, any>): [string[]?, SelectMessagesDTO?] {
        props.idSala = Number(props.idSala)
        const response = this.validationSchema(props)
        const { success } = response
        
        if(!success) {
            const { error } = response
            return [JSON.parse(error.message).map((err: z.ZodError) => err.message)]
        }

        const {idSala} = response.data

        return [undefined,
            new SelectMessagesDTO(idSala)
        ]
    }
}