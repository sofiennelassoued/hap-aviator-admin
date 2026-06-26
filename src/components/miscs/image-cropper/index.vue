<template>
  <div class="modal fade modal-lg" id="crop-modal" tabindex="-1" role="dialog" aria-labelledby="crop-modal-label"
    aria-hidden="true" ref="modalRef">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="crop-modal-label">Crop image</h5>
          <button type="button" class="close btn btn-light" data-dismiss="modal" aria-label="Close"
            @click="handleOnClickCloseModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="cropper-wrapper">
            <VuePictureCropper :boxStyle="CROPPER_BOX_STYLE" :img="image" :options="{ ...CROPPER_OPTIONS, aspectRatio }"
              v-if="!isLoading" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            @click="handleOnClickCloseModal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleOnClickCrop">Crop</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VuePictureCropper, { cropper } from 'vue-picture-cropper';
import { CROPPER_BOX_STYLE, CROPPER_OPTIONS } from './index.config';
const { image } = defineProps(['image', "aspectRatio"])
const modalRef = ref(null)
const modal = ref(null)
const isLoading = ref(true)
onMounted(() => {
  // @ts-ignore
  modal.value = new bootstrap.Modal(modalRef.value)
  // @ts-ignore
  modal.value.show()
  setTimeout(() => {
    isLoading.value = false
  }, 200);
})
const handleOnClickCloseModal = () => {
  // @ts-ignore
  modal.value!.hide()
}
const emit = defineEmits(['cropped'])
const handleOnClickCrop = () => {
  const fn = async () => {
    if (!cropper) return
    const base64 = cropper.getDataURL()
    const blob: Blob | null = await cropper.getBlob()
    if (!blob) return
    const file = await cropper.getFile({
      fileName: "File name",
    })
    emit("cropped", { base64, blob, file })
    // @ts-ignore
    modal.value!.hide()
  }
  fn()
}
const handleOnReady = () => {
  // console.log("Cropper is ready")
}
const handleOnClear = () => {
  if (!cropper) return
  cropper.clear()
}
const handleOnReset = () => {
  if (!cropper) return
  cropper.reset()
}
</script>

<style scoped></style>
