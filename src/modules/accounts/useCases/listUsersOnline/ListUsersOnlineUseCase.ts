import { inject, injectable } from 'tsyringe'

import { User } from '@modules/accounts/infra/typeorm/entities/User'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'

@injectable()
class ListUsersOnlineUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.listUsersOnline()

    return users
  }
}

export { ListUsersOnlineUseCase }
