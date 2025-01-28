<template>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
        <div class="progress mt-2" v-if="progress">
          <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'" :aria-valuenow="progress"
            aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
        </div>
        <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
          @cropped="handleOnCropped" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/cropper/index.config';
import { ref } from 'vue';
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const progress = ref<number>(0)
const handleOnCropped = ({ base64, blob, file }: { base64: string; blob: Blob | null, file: Blob | null }) => {
  tempImage.value = ""
  image.value = base64
  imageBlob.value = blob
}
const handleOnLoaded = (i: string) => {
  tempImage.value = i
}
const handleOnReset = () => {
  tempImage.value = ''
  image.value = ''
  imageBlob.value = null
}
</script>

<style scoped></style>