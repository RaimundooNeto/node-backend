import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../infra/typeorm/entities/User'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  updateUserOnlineList(user: User): Promise<void>
  listUsersOnline(): Promise<User[]>
}

export { IUsersRepository }
