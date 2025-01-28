<script setup lang="ts">
import { onAuthStateChanged } from '@/domain/auth';
import MainLayout from '@/layout/main/index.vue';
import { type User } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import SignInView from "@/views/auth/index.vue";
const user = ref<User | null>(null);
const loading = ref<boolean>(false);
onMounted(() => {
  loading.value = true
  onAuthStateChanged(u => {
    loading.value = true
    user.value = u
    loading.value = false
  })
})
</script>

<template>
  <div class="loading" v-if="loading"><div class="spinner-grow" role="status" /></div>
  <main-layout v-if="!loading && user" />
  <sign-in-view v-if="!loading && !user" />
</template>

<style scoped>
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
