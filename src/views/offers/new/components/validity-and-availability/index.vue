<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Validity & Availability</h3>
        <div class="form-group col-md-6">
          <label for="input-start-date">Start date *</label>
          <input type="date" class="form-control" id="input-start-date" required v-model="startDate">
        </div>
        <div class="form-group col-md-6">
          <label for="input-end-date">End date *</label>
          <input type="date" class="form-control" id="input-end-date" required v-model="endDate">
        </div>
        <div class="form-group col-md-6 mt-2">
          <div class="d-flex justify-content-between mb-1">
            <span for="input-stock-or-quota">Stock/Quota *</span>
            <span v-if="limited" class="cursor-pointer" @click="handleOnClickLimited">Set limited</span>
            <span v-if="!limited" class="cursor-pointer" @click="handleOnClickLimited">Set unlimited</span>
          </div>
          <input type="number" class="form-control" min="1" id="input-stock-or-quota" :disabled="limited"
            :placeholder="!limited ? 'Ex: 10' : 'Unlimited'" required v-model.number="quota">
          <div id="help-stock-or-quota" class="form-text" v-if="limited">Offer is limited</div>
          <div id="help-stock-or-quota" class="form-text" v-if="!limited">Offer is unlimited</div>
        </div>
        <div class="form-group col-md-6">
          <label for="input-priority">Priority *</label>
          <priority-picker :selected="priority" @select="handleOnPrioritySelect" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PriorityPicker from "./priority-picker/index.vue"
const props = defineProps(['startDate', 'endDate', 'quota', 'priority'])
const startDate = ref()
const endDate = ref()
const quota = ref()
const limited = ref()
const priority = ref()
onMounted(() => {
  startDate.value = props.startDate
  endDate.value = props.endDate
  quota.value = props.quota
  priority.value = props.priority

  // TODO: Update this to use the correct priority
  const SELECTED_PRIORITY = 'medium'
  priority.value = SELECTED_PRIORITY
})
const handleOnPrioritySelect = (v: string) => {
  priority.value = v
}
const handleOnClickLimited = () => {
  quota.value = null
  limited.value = !limited.value
}
defineExpose({ startDate, endDate, quota, priority })
</script>

<style scoped></style>
