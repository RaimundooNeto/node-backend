import { inject, injectable } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'

interface IRequest {
  user_id: string
}

@injectable()
class UpdateIsOnlineUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async excute({ user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)

    user.isOnline = !user.isOnline

    this.usersRepository.updateUserOnlineList(user)
    await this.usersRepository.create(user)
  }
}

export { UpdateIsOnlineUseCase }
