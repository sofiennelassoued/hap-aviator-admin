<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Media</h3>
        <item :key="i" v-for="i in Array.from(Array(count).keys())" :index="i" :progress="progresses[i]"
          @cropped="handleOnCropped" @reset="handleOnReset" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from './item.vue'
export type Media = { image: string, blob: Blob }
const { count } = defineProps(['count', 'progresses'])
const media: (Media | null)[] = new Array(count).fill(null);
const handleOnCropped = (v: Media, i: number) => {
  media[i] = v
}
const handleOnReset = (i: number) => {
  media[i] = null
}
defineExpose({
  media
})
</script>

<style scoped></style>
