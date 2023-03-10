import { Specification } from '../infra/typeorm/entities/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
}

export { ISpecificationsRepository, ICreateSpecificationDTO }
