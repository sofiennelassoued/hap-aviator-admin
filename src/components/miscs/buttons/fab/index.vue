<template>
  <router-link :to="link">
    <a class="btn btn-primary px-5 fab">
      <i class="ph ph-plus"></i> Create
    </a>
  </router-link>
</template>

<script setup lang="ts">
const { link } = defineProps(['link'])
</script>

<style scoped>
.fab {
  position: fixed;
  right: 64px;
  bottom: 32px;
  border-radius: 48px;
}
</style>
