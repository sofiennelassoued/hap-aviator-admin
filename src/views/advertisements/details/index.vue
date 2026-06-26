<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/advertisements">Advertisements</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>
  <div class="row">
    <div class="col-md-3" v-if="state.payload">
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
          <img class="card-img-top img my-3" alt="Thumbnail" :src="state.payload.url" />
        </div>
      </div>
    </div>
    <div class="col-md-9"
      v-if="state.analytics && state.analytics.dates && state.analytics.dates.views && state.analytics.dates.visits && state.payload" >
      <reach :views="state.analytics.dates.views" :visits="state.analytics.dates.visits" :createdAt="state.payload.createdAt" />
    </div>
  </div>
  <div class="row" v-if="state.analytics">
    <div class="col-md-4">
      <sexes :views="state.analytics.views.sexes" :visits="state.analytics.visits.sexes" />
    </div>
    <div class="col-md-4">
      <ages :views="state.analytics.views.ages" :visits="state.analytics.visits.ages" />
    </div>
    <div class="col-md-4">
      <interests :views="state.analytics.views.interests" :visits="state.analytics.visits.interests"
        :payload="state.interests" />
    </div>
    <div class="col-md-4" :payload="state.regions">
      <regions v-if="state.regions" :views="state.analytics.views.regions" :visits="state.analytics.visits.regions"
        :payload="state.regions" />
    </div>
    <div class="col-md-8" :payload="state.states">
      <states v-if="state.states" :views="state.analytics.views.states" :visits="state.analytics.visits.states"
        :payload="state.states" />
    </div>
  </div>
  <div class="alert alert-info" v-if="!state.analytics">Please wait for users views and visits</div>
</template>

<script setup lang="ts">
import Ages from '@/components/advertisements/analytics/ages/index.vue';
import Interests from '@/components/advertisements/analytics/interests/index.vue';
import Reach from '@/components/advertisements/analytics/reach/index.vue';
import Regions from '@/components/advertisements/analytics/regions/index.vue';
import Sexes from '@/components/advertisements/analytics/sexes/index.vue';
import Subregions from '@/components/advertisements/analytics/subregions/index.vue';
import { getAdvertisementAnalytics } from '@/domain/advertisement-analytics';
import { getAdvertisementMetadata } from '@/domain/advertisements';
import { getInterests } from '@/domain/interests';
import { listRegions } from '@/domain/regions';
import { listSubregions } from '@/domain/subregions';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id as string
const state = reactive({ payload: null, interests: null, regions: null, states: null, analytics: null, titleContainer: true })
const listener = ref()
const COUNTRY = "sau"
onMounted(() => {
  const fn1 = async () => {
    try {
      if (!id) {
        throw new Error('No ID provided')
      }
      const result = await getAdvertisementMetadata(id)
      state.payload = result
    } catch (error) {
      console.log(error)
    }
  }
  fn1()
  const fn2 = async () => {
    try {
      if (!id) {
        throw new Error('No ID provided')
      }
      const result = await getInterests()
      state.interests = result
    } catch (error) {
      console.log(error)
    }
  }
  fn2()
  const fn3 = async () => {
    try {
      if (!id) {
        throw new Error('No ID provided')
      }
      const result = await listRegions(COUNTRY)
      state.regions = result
    } catch (error) {
      console.log(error)
    }
  }
  fn3()
  const fn4 = async () => {
    try {
      if (!id) {
        throw new Error('No ID provided')
      }
      const result = await listSubregions(COUNTRY)
      state.states = result
    } catch (error) {
      console.log(error)
    }
  }
  fn4()
  const fn5 = async () => {
    try {
      if (!id) {
        throw new Error('No ID provided')
      }
      listener.value = await getAdvertisementAnalytics(id, (doc) => {
        state.analytics = doc.data()
      })
    } catch (error) {
      console.log(error)
    }
  }
  fn5()
})
onUnmounted(() => {
  listener.value() // Unsubscribe listener
})
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
