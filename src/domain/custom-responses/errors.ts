import { type Response } from 'express'

export class CustomError extends Error {
    private constructor (
        public readonly statusCode: number,
        public message: string
    ) {
        super(message)
    }

    public static handleError = (res: Response, error: unknown) => {
        let messageError

        if (error instanceof CustomError) {
            if (error.message.startsWith('[') && error.message.endsWith(']')) {
                error.message = JSON.parse(error.message)
            }

            messageError = { code: '2', error: error.message }
            return res.status(error.statusCode).send(messageError)
        }

        messageError = { code: '3', error: 'Internal server error.' }

        return res.status(500).send(messageError)
    }

    static badRequest (message: string | string[]) {
        if (Array.isArray(message)) return new CustomError(400, JSON.stringify(message))
        return new CustomError(400, message)
    }

    static selectNotFound () {
        return new CustomError(404, 'No se encontraron resultados.')
    }

}