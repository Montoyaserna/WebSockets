import { type CustomError, type CustomResponses, type ServiceUseCases } from '../../domain'
import { type  SelectsRepository } from '../repositories'
import { type SelectMessagesDTO } from '../dtos'

export class SelectMessagesSala implements ServiceUseCases<SelectMessagesDTO> {
    constructor (
        private readonly selectsRepository: SelectsRepository
    ) {}

    public async execute (dto: SelectMessagesDTO): Promise<CustomResponses | CustomError> {
        return await this.selectsRepository.selectMessagesSala(dto)
    }
}