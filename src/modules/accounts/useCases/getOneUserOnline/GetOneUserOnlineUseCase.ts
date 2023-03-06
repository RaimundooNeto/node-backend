import { inject } from 'tsyringe'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { User } from '@modules/accounts/infra/typeorm/entities/User'

class GetOneUserOnlineUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute(): Promise<User> {
    const users = await this.usersRepository.listUsersOnline()

    const currentIndex = this.usersRepository.currentIndex
    this.usersRepository.currentIndex++

    return users[currentIndex]
  }
}

export { GetOneUserOnlineUseCase }
