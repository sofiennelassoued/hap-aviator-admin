<template>
  <div class="row">
    <div class="col-lg-3" v-if="state.payload">
      <div class="row">
        <div class="card" @mouseover="hideTitleContainer" @mouseleave="showTitleContainer">
          <div class="legend action px-2" v-show="state.titleContainer">
            <div>
              {{ state.payload.action }}
            </div>
            <div
              class="badge text-bg-success text-light fs-2 lh-sm mb-9 me-6 fw-semibold position-absolute bottom-0 end-0">
              Live</div>
          </div>
          <div class="legend title" v-show="state.titleContainer">
            <div>
              {{ state.payload.title }}
            </div>
          </div>
          <img class="card-img-top img my-3" alt="Thumbnail" :src="state.payload.image" />
        </div>
      </div>
    </div>
    <div class="col-lg-9" v-if="state.analytics">
      <reach :views="state.analytics.views" :interactions="state.analytics.interactions" />
    </div>
  </div>
  <div class="row" v-if="state.analytics">
    <div class="col-md-4">
      <sex :payload="state.analytics.sex" />
    </div>
    <div class="col-md-4">
      <age :payload="state.analytics.age" />
    </div>
    <div class="col-md-4">
      <interests :payload="state.analytics.interests" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Age from '@/components/advertisements/analytics/age/index.vue';
import Interests from '@/components/advertisements/analytics/interests/index.vue';
import Reach from '@/components/advertisements/analytics/reach/index.vue';
import Sex from '@/components/advertisements/analytics/sex/index.vue';
import { getAdvertisement, getAdvertisementAnalytics } from '@/domain/advertisements';
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.params
const state = reactive({ payload: null, analytics: null, titleContainer: true })

onMounted(() => {
  const fn = async () => {
    try {
      const result = await getAdvertisement(id)
      state.payload = result
    } catch (error) {
      console.log(error)
    }
  }
  fn()
  const fn2 = async () => {
    try {
      const result = await getAdvertisementAnalytics(id)
      state.analytics = result
    } catch (error) {
      console.log(error)
    }
  }
  fn2()
})
const { payload } = toRefs(state)
const hideTitleContainer = () => {
  state.titleContainer = false
}
const showTitleContainer = () => {
  state.titleContainer = true
}
</script>
<style scoped>
img {
  border-radius: 24px;
}

.legend {
  background-color: #21212188;
  color: white;
  position: absolute;
  height: 64px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
}

.title {
  top: 16px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  justify-content: center;
}

.action {
  bottom: 16px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  justify-content: space-between;
}
</style>
