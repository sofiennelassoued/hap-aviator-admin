<template>
  <div class="col-md-3">
    <img :src="item" class="image" />
    <a :href="item" target="_blank" class="btn btn-sm btn-secondary mt-2">
      View
    </a>
  </div>
</template>

<script setup lang="ts">
const { item } = defineProps(['item'])
</script>

<style scoped>
.image {
  max-width: 100%;
}
</style>
