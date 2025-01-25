<template>
  <div class="col-lg-4">
    <router-link :to="'/advertisements/' + payload.id">
      <div class="card overflow-hidden hover-img">
        <div class="position-relative">
          <img class="card-img-top img" alt="Thumbnail" :src="payload.image" />
          <span
            class="badge text-light fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0 text-capitalize"
            :class="getBackground()">{{
              payload.status }}</span>
        </div>
        <div class="card-body p-4">
          <span class="badge text-bg-light fs-2 py-1 px-2 lh-sm mt-3">
            <a target="_blank" :href="'https://www.example.com/' + payload.id">{{ payload.action }}</a>
          </span>
          <a class="d-block my-4 fs-5 text-dark fw-semibold link-primary" href="">{{ payload.title }}</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-eye text-dark fs-5"></i>{{ payload.views }}
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="ti ti-hand-finger text-dark fs-5"></i>{{ payload.interactions }}
            </div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point text-dark"></i>{{ payload.createdAt }}
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const { payload } = defineProps(["payload"])
const getBackground = () => {
  if (payload.status === 'paused') return 'text-bg-primary'
  if (payload.status === 'pending') return 'text-bg-warning'
  if (payload.status === 'draft') return 'text-bg-secondary'
  if (payload.status === 'rejected') return 'text-bg-danger'
  if (payload.status === 'archived') return 'text-bg-danger'
  return 'text-bg-success'
}
</script>

<style scoped>
img {
  height: 240px !important;
  object-fit: cover;
}
</style>
