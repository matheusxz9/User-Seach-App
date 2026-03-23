<script setup lang="ts">
defineProps<{
  name: string;
  email: string;
  company: {
    name: string;
  };
}>();

</script>
<template>
    <div class="user-card">
        <h3>{{ name }}</h3>
        <p>{{ email }}</p>
        <span>{{ company.name }}</span>
    </div>
</template>
<style scoped>.user-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
  transition: transform 0.2s;
}
.user-card:hover {
  transform: translateY(-5px);
  border-color: #42b883; /* Cor do Vue */
}
</style>