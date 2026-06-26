<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Media</h3>
        <item :key="i" v-for="i in media" :item="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from './item.vue'
const { media } = defineProps(['media'])
</script>

<style scoped></style>
