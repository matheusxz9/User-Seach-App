<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { fetchUsers, type User } from './services/api';
import UserCard from './components/UserCard.vue';

// Estados reativos
const users = ref<User[]>([]);
const search = ref('');
const isLoading = ref(true);
const error = ref<string | null>(null);

// Estado de favoritos em memória
const favorites = ref<number[]>([]);

const toggleFavorite = (id: number) => {
    if (favorites.value.includes(id)) {
        favorites.value = favorites.value.filter(favId => favId !== id);
    } else {
        favorites.value.push(id);
    }
};

// Ciclo de vida: busca os dados assim que o app inicia
onMounted(async () => {
    try {
        users.value = await fetchUsers();
    } catch (err) {
        error.value = 'Não foi possível carregar a lista de usuários.';
    } finally {
        isLoading.value = false;
    }
});

// Logica de filtro
const filteredUsers = computed(() => {
   return users.value.filter(user => 
     user.name.toLowerCase().includes(search.value.toLowerCase())
   );
});
</script>

<template>
    <main class="container">
        <h1>Localizador de Usuários</h1>

        <div class="search-box">
            <input v-model="search" type="text" placeholder="Digite um nome para filtrar..." class="search-input"/>
        </div>

        <div v-if="isLoading" class="feedback">Carregando usuários...</div>
        <div v-else-if="error" class="feedback error">{{ error }}</div>

        <section v-else>
            <div v-if="filteredUsers.length > 0" class="user-grid">
                <UserCard 
                    v-for="user in filteredUsers" 
                    :key="user.id" 
                    :name="user.name" 
                    :email="user.email" 
                    :company="user.company"
                    :is-favorite="favorites.includes(user.id)"
                    @toggle-favorite="() => toggleFavorite(user.id)"
                    />
            </div>
            <div v-else class="feedback">
                Nenhum usuário encontrado com o nome "<strong>{{ search }}</strong>"
            </div>
        </section>
    </main>
</template>

<style>
.container { max-width: 800px; margin: 0 auto; padding: 2rem; font-family: sans-serif; }
.search-box { margin-bottom: 2rem; }
.search-input { width: 100%; padding: 0.8rem; font-size: 1rem; border-radius: 4px; border: 1px solid #ddd; }
.user-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
.feedback { text-align: center; margin-top: 2rem; font-size: 1.2rem; }
.error { color: #ff4444; }
</style>