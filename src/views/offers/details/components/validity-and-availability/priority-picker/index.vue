<template>
  <select class="form-select" name="select" aria-label="Select offer priority" @change="handleOnChange" disabled>
    <option disabled :selected="!selected">Select offer priority</option>
    <option :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{ i.label }}</option>
  </select>
  <div id="help-select" class="form-text">Will be used in the future</div>
</template>

<script setup lang="ts">
import { items } from './items';
const { selected } = defineProps(['selected'])
const emit = defineEmits(['select'])
const handleOnChange = (e: Event) => {
  emit('select', (e.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
