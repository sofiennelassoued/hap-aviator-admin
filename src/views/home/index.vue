<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
      <advertisements-collection-item :key="p.id" v-for="p in advertisements" :payload="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import AdvertisementsCollectionItem from '@/components/advertisements/collection-item/index.vue'
import { getAdvertisements } from '@/domain/advertisements'

const route = useRoute()
const state = reactive({ allAdvertisements: [], advertisements: [] })
onMounted(() => {
  const fn = async () => {
    try {
      const result = await getAdvertisements()
      state.allAdvertisements = result
      if (route.query.status)
        state.advertisements = result.filter(({ status }) => status === route.query.status)
      else state.advertisements = result.filter(({ status }) => status === 'live')
    } catch (error) {
      console.log(error)
    }
  }
  fn()
})
watch(route, (to) => {
  if (route.query.status)
    state.advertisements = state.allAdvertisements.filter(({ status }) => status === route.query.status)
  else state.advertisements = state.allAdvertisements.filter(({ status }) => status === 'live')
}, { flush: 'pre', immediate: true, deep: true })
const { advertisements } = toRefs(state)
</script>

<style scoped></style>
