<!--View layer - responsible for presenting the data-->

<template>
  <div>
    <h1>Usuário</h1>

    <div v-if="loading" class="loading">Carregando...</div>

    <div v-if="hasError" class="error">
      {{ error }}
    </div>

    <button @click="loadUsers" :disabled="loading">Recarregar</button>

    <div v-if="hasUsers">
      <p>Total: {{ totalUsers }}</p>

      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.name }} - {{ user.address }}</span>
        </li>
      </ul>
    </div>

    <div v-else class="empty">Nenhum usuário encontrado</div>
  </div>
</template>

<script setup lang="ts">
import { useUserViewModel } from '@/viewmodel/UserViewModel' //use view-model
import { onMounted } from 'vue'

const { users, loading, error, hasError, hasUsers, totalUsers, loadUsers } = useUserViewModel() //reative states

onMounted(() => {
  //function for loadUsers when load page
  loadUsers()
})
</script>
