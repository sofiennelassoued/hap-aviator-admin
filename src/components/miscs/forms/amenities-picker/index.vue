<template>
  <div class="input-group">
    <input type="text" class="form-control" id="input-search" placeholder="Search" @input="handleOnSearch">
    <div class="input-group-prepend" @click="handleOnReset">
      <span class="input-group-text bg-danger button-action" id="input-reset">
        <iconify-icon icon="mdi:clear-circle" class="text-white"></iconify-icon>
      </span>
    </div>
    <div class="input-group-prepend" @click="handleOnRefresh">
      <span class="input-group-text bg-secondary button-action" id="input-refresh">
        <iconify-icon icon="mdi:refresh" class="text-white"></iconify-icon>
      </span>
    </div>
  </div>
  <div class="container-items">
    <div class="container-item" v-for="item in items.sort((a, b) => a.position - b.position)" :key="item.id"
      @click="handleOnClickAdd(item)">
      {{ item.position }} -
      <iconify-icon :icon="'mdi:' + item.icon"></iconify-icon>
      <div class="mx-1"></div>
      {{ item.label }}
    </div>
  </div>
  <div class="mb-1"></div>
  <div class="container-tags">
    <div class="badge bg-secondary container-badge me-1 mb-1"
      v-for="item in tags.sort((a, b) => a.position - b.position)" :key="item.id" @click="handleOnClickRemove(item.id)">
      <iconify-icon :icon="'mdi:' + item.icon"></iconify-icon>
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAmenities } from '@/domain/amenities';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref, toRaw } from 'vue';
const { selected } = defineProps(['selected'])
const loading = ref(false)
const allItems = ref<DocumentData>([])
const items = ref<DocumentData>([])
const tags = ref<DocumentData>([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      allItems.value = await getAmenities()
      items.value = allItems.value.filter(({ id }: DocumentData) => !selected.includes(id));
      tags.value = allItems.value.filter(({ id }: DocumentData) => selected.includes(id));
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const emit = defineEmits(['select'])
const handleOnSearch = (e: Event) => {
  const term = (e.target as HTMLInputElement).value
  items.value = allItems.value.filter(({ label }: DocumentData) => label.toLowerCase().includes(term.toLowerCase()))
}
const handleOnClickAdd = (v: DocumentData) => {
  if (!tags.value.some(({ id }: { id: string }) => id === v.id)) {
    tags.value = [...tags.value, v]
    items.value = items.value.filter(({ id }: DocumentData) => id !== v.id)
    if (tags.value.length > 0) {
      const elements = tags.value.map(({ id }) => id)
      emit('select', elements)
    }
  }
}git
const handleOnClickRemove = (v: string) => {
  tags.value = tags.value.filter(({ id }: DocumentData) => id !== v)
  items.value = [...items.value, allItems.value.find(({ id }: DocumentData) => id === v)]
  if (tags.value.length > 0) {
    const elements = tags.value.map(({ id }) => id)
    emit('select', elements)
  }
}
const handleOnReset = () => {
  tags.value = []
  items.value = allItems.value
}
const handleOnRefresh = () => {
  const fn = async () => {
    try {
      loading.value = true
      tags.value = []
      allItems.value = await getAmenities()
      items.value = allItems.value
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
}
</script>

<style scoped>
.container-items {
  border-width: 1px;
  height: 64px;
  overflow-y: auto;
  padding-left: 16px;
  padding-right: 4px;
  border: 1px solid rgb(223, 229, 239);
}

.container-item {
  display: flex;
  cursor: pointer;
  height: 24px;
  align-items: center;
}

div.container-items :hover {
  background-color: rgb(223, 229, 239);
  padding-left: 4px;
}

.container-badge {
  cursor: pointer;
}

#input-reset {
  cursor: pointer;
}

.button-action {
  height: 42px;
  width: 42px;
  cursor: pointer;
}
</style>
