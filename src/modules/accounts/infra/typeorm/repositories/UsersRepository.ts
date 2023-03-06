import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { User } from '../entities/User'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>
  private usersOnline: User[] = []
  public currentIndex = 0

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    email,
    driver_license,
    password,
    id,
    avatar,
    isOnline,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      id,
      avatar,
      isOnline,
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
  }

  async updateUserOnlineList(user: User) {
    if (user.isOnline) {
      this.usersOnline.push(user)
    } else {
      const index = this.usersOnline.findIndex((item) => item.id === user.id)
      if (index !== -1) {
        this.usersOnline.splice(index, 1)
      }
    }
  }

  async listUsersOnline(): Promise<User[]> {
    return this.usersOnline
  }
}

export { UsersRepository }
