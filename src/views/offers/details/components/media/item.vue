<template>
  <div class="col-md-3">
    <img :src="item" />
    <a :href="item" target="_blank" class="btn btn-sm btn-secondary mt-2">
      View
    </a>
  </div>
</template>

<script setup lang="ts">
const { item } = defineProps(['item'])
</script>

<style scoped></style>
