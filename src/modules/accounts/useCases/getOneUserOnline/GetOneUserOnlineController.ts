import { container } from 'tsyringe'
import { GetOneUserOnlineUseCase } from './GetOneUserOnlineUseCase'

class GetOneUserOnlineController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getOneUserOnlineUseCase = container.resolve(GetOneUserOnlineUseCase)

    const user = await getOneUserOnlineUseCase.execute()

    return response.json(user)
  }
}

export { GetOneUserOnlineController }
