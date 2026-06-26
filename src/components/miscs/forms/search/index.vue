<template>
    <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
        placeholder="Search by name, email or ID" @input="handleOnInput">
</template>

<script setup lang="ts">
const { items } = defineProps(['items'])
const emit = defineEmits(['filtered'])
const handleOnInput = (e: Event) => {
    const term = (e.target as HTMLInputElement).value
    if (items.length > 0) {
        const result = items.filter((i: any) => i.email.toLowerCase().includes(term.toLowerCase()) || i.name.toLowerCase().includes(term.toLowerCase()) || i.id.toLowerCase().includes(term.toLowerCase()))
        emit('filtered', result)
    }
}
</script>

<style scoped></style>