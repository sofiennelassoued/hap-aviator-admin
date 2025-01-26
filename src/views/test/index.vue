<template>
  <div>
    <input ref="uploadInput" type="file" accept="image/jpg, image/jpeg, image/png" @change="handleOnChange" />
    <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
      @cropped="handleOnCropped" />
    <img :src="result.dataURL" v-if="result.dataURL" />
  </div>
</template>

<script setup lang="ts">
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/cropper/index.config';
import Cropper from '@/components/miscs/cropper/index.vue'
import { reactive, ref } from 'vue';

const uploadInput = ref<HTMLInputElement | null>(null)
const tempImage = ref<string>('')
const result = reactive({
  dataURL: '',
  blobURL: '',
})
const handleOnChange = (e: Event) => {
  // Reset last selection and results
  tempImage.value = ''
  result.dataURL = ''
  result.blobURL = ''

  // Get selected files
  const { files } = e.target as HTMLInputElement
  if (!files || !files.length) return

  // Convert to dataURL and pass to the cropper component
  const file = files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    // Update the picture source of the `img` prop
    tempImage.value = String(reader.result)

    // Clear selected files of input element
    if (!uploadInput.value) return
    uploadInput.value.value = ''
  }
}
const handleOnCropped = ({ base64, blob, file }: { base64: string; blob: Blob | null, file: Blob | null }) => {
  console.log("aaaaaa")
  console.log(base64)
  console.log(blob)
  result.dataURL = base64
  console.log("aaaaaa")
}
</script>

<style scoped></style>