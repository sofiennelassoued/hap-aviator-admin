<template>
  <div class="col-md-3">
    <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
    <div class="progress mt-2" v-if="progress">
      <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'" :aria-valuenow="progress"
        aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
    </div>
    <image-cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_16_9"
      @cropped="handleOnCropped" />
  </div>
</template>

<script setup lang="ts">
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/image-cropper/index.config';
import ImagePicker from '@/components/miscs/image-picker/index.vue'
import ImageCropper from '@/components/miscs/image-cropper/index.vue'
import { ref } from 'vue';
const { index, progress } = defineProps(['index', 'progress'])
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const emit = defineEmits(['cropped', 'reset'])
const handleOnCropped = ({ base64, blob, file }: { base64: string; blob: Blob | null, file: Blob | null }) => {
  tempImage.value = ""
  image.value = base64
  imageBlob.value = blob
  emit('cropped', {
    image: base64,
    blob
  },
    index)
}
const handleOnLoaded = (i: string) => {
  tempImage.value = i
}
const handleOnReset = () => {
  tempImage.value = ''
  image.value = ''
  imageBlob.value = null
  emit('reset', index)
}
</script>

<style scoped></style>
