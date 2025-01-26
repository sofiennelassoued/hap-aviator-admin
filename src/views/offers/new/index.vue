<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/offers">Offers</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Create</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
              </div>
              <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
              </div>
              <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
              </div>
              <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
              </div>
              <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <h3>Basics</h3>
                <div class="form-group col-md-6">
                  <label for="input-title">Title</label>
                  <input type="text" class="form-control" id="input-title" placeholder="Ex: Pizza 4 seasons">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-category">Category</label>
                  <input type="password" class="form-control" id="input-category" placeholder="Ex: Happy Pizza">
                </div>
                <div class="form-group col-md-12">
                  <label for="input-description">Description</label>
                  <textarea class="form-control" id="input-description" placeholder="Ex: Lorem ipsum"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <h3>Pricing</h3>
                <div class="form-group col-md-6">
                  <label for="input-points">Points</label>
                  <input type="number" class="form-control" id="nput-points" placeholder="Ex: Pizza 4 seasons">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-discount">Discount</label>
                  <input type="number" class="form-control" id="input-discount" placeholder="Ex: Happy Pizza">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-original-price">Original Price</label>
                  <input type="number" class="form-control" id="input-original-price" placeholder="Ex: Pizza 4 seasons">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-price-after-discount">Price after Discount</label>
                  <input disabled type="text" class="form-control" id="input-price-after-discount"
                    placeholder="Ex: Happy Pizza">
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <h3>Validity & Availability</h3>
                <div class="form-group col-md-6">
                  <label for="input-start-date">Start date</label>
                  <input type="date" class="form-control" id="input-start-date">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-end-date">End date</label>
                  <input type="password" class="form-control" id="input-end-date">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-stock-or-quota">Stock/Quota</label>
                  <input type="number" class="form-control" id="input-stock-or-quota" placeholder="Ex: 10">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-priority">Priority</label>
                  <input type="text" class="form-control" id="input-priority" placeholder="Ex: Pizza 4 seasons">
                </div>
              </div>
              <div class="row mt-3">
                <h3>Business Details</h3>
                <div class="form-group col-md-6">
                  <label for="input-business-name">Name</label>
                  <input type="text" class="form-control" id="input-business-name" placeholder="Ex: Happy Pizza">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-business-representative">Representative</label>
                  <input type="text" class="form-control" id="input-business-representative"
                    placeholder="Ex: Bob Black">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-location">Location</label>
                  <input type="text" class="form-control" id="input-location" placeholder="Ex: Pizza 4 seasons">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-address">Address</label>
                  <textarea class="form-control" id="input-address" placeholder="Ex: One article each week"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="input-email">Email</label>
                  <input type="text" class="form-control" id="input-email" placeholder="Ex: Pizza 4 seasons">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-phone">Phone</label>
                  <input type="text" class="form-control" id="input-phone" placeholder="Ex: Happy Pizza">
                </div>
                <div class="mt-4"></div>
                <h6>Opening hours</h6>
                <div class="form-group col-md-6">
                  <label for="input-monday-opening-hour">Monday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-monday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-monday-closing-hour">Monday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-monday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-tuesday-opening-hour">Tuesday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-tuesday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-tuesday-closing-hour">Tuesday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-tuesday-closing-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-wednesday-opening-hour">Wednesday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-wednesday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-wednesday-closing-hour">Wednesday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-wednesday-closing-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-thursday-opening-hour">Thursday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-thursday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-thursday-closing-hour">Thursday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-thursday-closing-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-friday-opening-hour">Friday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-friday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-friday-closing-hour">Friday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-friday-closing-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-saturday-opening-hour">Saturday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-saturday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-saturday-closing-hour">Saturday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-saturday-closing-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-sunday-opening-hour">Sunday opening hour <button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'opening')">Fill opening
                      hours</button></label>
                  <input type="time" class="form-control" id="input-sunday-opening-hour">
                </div>
                <div class="form-group col-md-6">
                  <label for="input-sunday-closing-hour">Sunday closing hour<button
                      class="btn btn-simple btn-sm text-info" @click="handleOnClickFill('', 'closing')">Fill closing
                      hours</button></label>
                  <input type="time" class="form-control" id="input-sunday-closing-hour">
                </div>
              </div>
              <div class="row mt-3">
                <h3>Conditions & Limitations</h3>
                <div class="form-group col-md-6">
                  <label for="input-conditions">Conditions</label>
                  <textarea class="form-control" id="input-conditions" placeholder="Ex: You must be over 18"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="input-conditions">Limitations</label>
                  <textarea class="form-control" id="input-limitations"
                    placeholder="Ex: One article each week"></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-3" :disabled="loading">
                <span v-if="!loading">Submit</span>
                <div class="spinner-grow text-light spinner-grow-sm" role="status" v-else>
                </div>
              </button>
              <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/cropper/index.config';
import Cropper from '@/components/miscs/cropper/index.vue';
import ImagePicker from '@/components/miscs/image-picker/index.vue';
import { IMAGES_STORAGE_BUCKET } from '@/constants';
import { createOffer } from '@/domain/offers';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const email = ref()
const password = ref()
const name = ref()
const link = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const uid = ""
const handleOnSubmit = () => {
  const fn = async () => {
    if (imageBlob.value) {
      try {
        loading.value = true
        error.value = ""
        upload(IMAGES_STORAGE_BUCKET + '/offers/' + uid, imageBlob.value, async (e, s, u) => {
          if (e) error.value
          if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
          if (u) {
            const metadata = {
              email: email.value,
              name: name.value,
              link: link.value,
              image: u,
              createdAt: new Date().toISOString()
            }
            await createOffer(uid, metadata)
            loading.value = false
            Swal.fire({
              title: "Offer created",
              text: "What do you want to do next?",
              icon: "success",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Create offer",
              cancelButtonText: "Close",
              denyButtonText: `View details`
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
              } else if (result.isDenied) {
                router.push(uid);
              }
            });
          }
        })
      } catch (e) {
        console.log(e)
        loading.value = false
        // @ts-ignore
        error.value = e.message
      }
    }
  }
  fn()
}
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
const handleOnClickFill = (day: string, type: 'opening' | 'closing') => { }
</script>

<style scoped></style>
