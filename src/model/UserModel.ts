import type { User } from './dto/User'
import { UserService } from './services/UserServices'

// model layer rresponsible to business logic
// model class than use services in your method
export class UserModel {
  private service: UserService

  constructor(service?: UserService) {
    this.service = service || new UserService()
  }

  // find all users and return User dto
  async getUsers(): Promise<User[]> {
    console.log('[UserModel] Buscando usuários...')

    try {
      return await this.service.getUsers() // ← Call service
    } catch (error) {
      console.error('[UserModel] Erro ao buscar:', error)
      throw error
    }
  }
}

export type { User } from './dto/User' // expose user dto type
