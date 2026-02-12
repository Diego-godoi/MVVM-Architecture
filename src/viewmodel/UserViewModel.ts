import { UserModel, type User } from '@/model/UserModel'
import { ref, computed } from 'vue'

// View-Model layer responsabily to manager and expose data to view layer
export function useUserViewModel() {
  const model = new UserModel() // ← model instance

  // reactive states
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const totalUsers = computed(() => users.value.length)
  const hasUsers = computed(() => users.value.length > 0)
  const hasError = computed(() => error.value !== null)

  // call function in model instance
  async function loadUsers() {
    try {
      // set reactive states values
      loading.value = true
      error.value = null

      // getUsers method in model
      users.value = await model.getUsers()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao carregar'
    } finally {
      loading.value = false
    }
  }

  // expose to view
  return {
    users,
    loading,
    error,
    totalUsers,
    hasUsers,
    hasError,
    loadUsers,
  }
}
