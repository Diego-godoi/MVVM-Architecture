import { api } from '@/config/api'
import type { User } from '../dto/User'

// model layer
// containes api method
export class UserService {
  // get user method
  async getUsers(): Promise<User[]> {
    try {
      const response = await api.get<User[]>('/cinemas') // comunication with api rest

      return response.data
    } catch (error) {
      throw new Error('Erro ao buscar usuários')
    }
  }
}
