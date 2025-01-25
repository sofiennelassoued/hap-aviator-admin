<template>
  <div class="dropzone p-5 border rounded text-center position-relative"
    :class="{ 'border-primary': isDragging, 'border-secondary': !isDragging }" @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave" @drop.prevent="handleDrop">
    <p v-if="imagePreviews.length === 0" class="mb-0">
      {{ isDragging ? 'Drop your images here' : 'Drag and drop images here or click to upload' }}
    </p>
    <input type="file" class="d-none" ref="fileInput" accept="image/*" @change="handleFiles" multiple />
    <div v-if="imagePreviews.length > 0" class="preview-container d-flex flex-wrap justify-content-center">
      <div v-for="(image, index) in imagePreviews" :key="index" class="preview-box position-relative">
        <img :src="image" class="img-thumbnail" alt="Preview" />
        <button type="button" class="btn-close position-absolute top-0 end-0" aria-label="Remove"
          @click="deleteImage(index)"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDragging = ref(false);
const fileInput = ref(null);
const imagePreviews = ref([]);

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event) => {
  isDragging.value = false;
  const files = Array.from(event.dataTransfer.files);
  processFiles(files);
};

const handleFiles = (event) => {
  const files = Array.from(event.target.files);
  processFiles(files);
};

const processFiles = (files) => {
  const validFiles = files.filter((file) => file.type.startsWith('image/'));
  validFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviews.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const deleteImage = (index) => {
  imagePreviews.value.splice(index, 1);
};

const triggerFileInput = () => {
  fileInput.value.click();
};
</script>

<style scoped>
.dropzone {
  min-height: 360px;
  max-height: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  position: relative;
}

.dropzone.border-primary {
  border-width: 3px;
}

.dropzone.border-secondary {
  border-width: 1px;
}

.preview-container {
  width: 100%;
}

.preview-box {
  max-height: 320px;
  position: relative;
}

.img-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.btn-close {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
}
</style>
