import { type Response } from 'express'

export class CustomResponses {
    public readonly message: string
    public readonly statusCode: number
    public readonly data?: unknown

    private constructor (statusCode: number, message: string, data?: unknown) {
        this.statusCode = statusCode
        this.message = message
        this.data = data
    }

    public static handleReponse = (res: Response, customResponse: CustomResponses) => {
        const { statusCode, message, data } = customResponse

        const response = (data === undefined) ? {code: 1, message} : {code:1, message, data}

        return res.status(statusCode).send(response)
    }

    public static responseSelectOk (data: unknown): CustomResponses {
        return new CustomResponses(200, 'Consulta exitosa.', data)
    }

}