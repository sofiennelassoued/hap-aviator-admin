<template>
  <div class="p-5 border rounded text-center position-relative cursor-pointer" @click="handleOnClick">
    <input type="file" class="d-none" ref="fileInput" accept="video/mp4,video/x-m4v,video/*" @change="handleOnChange" />
    <div class="preview-container d-flex flex-wrap justify-content-center" v-if="preview">
      <div class="preview-box position-relative">
        <img :src="preview" class="img-thumbnail" alt="Preview" />
      </div>
    </div>
    <p class="mt-2">
      Click to upload
    </p>
  </div>
  <button type="button" class="btn btn-sm btn-danger mt-2" aria-label="Reset" v-if="preview"
    @click="handleOnClickDelete()">Reset</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const { preview } = defineProps(['preview'])
const fileInput = ref<HTMLInputElement | null>(null);
const emit = defineEmits(['loaded', 'reset'])
const handleOnChange = (e: Event) => {
  const { files } = e.target as HTMLInputElement
  if (!files || !files.length) return
  const file = files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    emit('loaded', null)
    setTimeout(() => {
      emit('loaded', reader.result);
      (e.target as HTMLInputElement).value = "";
    }, 100);
  }
};
const handleOnClick = () => {
  if (fileInput && fileInput.value) {
    fileInput.value.click();
  }
};
const handleOnClickDelete = () => {
  emit('reset')
}
</script>

<style scoped></style>
