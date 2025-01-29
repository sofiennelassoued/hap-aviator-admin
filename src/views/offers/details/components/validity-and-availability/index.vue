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
        <div class="form-group col-md-6">
          <label for="input-stock-or-quota">Stock/Quota *</label>
          <input type="number"   class="form-control" min="1" id="input-stock-or-quota" placeholder="Ex: 10" required
            v-model.number="quota">
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
defineExpose({ startDate, endDate, quota, priority })
</script>

<style scoped></style>
