<template>
  <h6>Opening hours *</h6>
  <!-- <template :key="h" v-for="h in Object.keys(hours)">{{ h }}</template> -->
</template>

<script setup lang="ts">
const { hours } = defineProps(['hours'])
</script>

<style scoped></style>
