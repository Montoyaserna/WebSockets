import { type CustomError, type CustomResponses } from '../custom-responses'

export interface ServiceUseCases<T> {
    execute: (dto: T) => Promise<CustomResponses | CustomError>
}