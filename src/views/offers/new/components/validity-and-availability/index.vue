<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Validity & Availability</h3>
        <div class="form-group col-md-6">
          <label for="input-start-date">Start date</label>
          <input type="date" class="form-control" id="input-start-date" v-model="startDate">
        </div>
        <div class="form-group col-md-6">
          <label for="input-end-date">End date</label>
          <input type="date" class="form-control" id="input-end-date" v-model="endDate">
        </div>
        <div class="form-group col-md-6">
          <label for="input-stock-or-quota">Stock/Quota</label>
          <input type="number" class="form-control" min="1" id="input-stock-or-quota" placeholder="Ex: 10"
            v-model.number="quota">
        </div>
        <div class="form-group col-md-6">
          <label for="input-priority">Priority</label>
          <priority-picker :selected="selectedPriority" @select="handleOnPrioritySelect" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PriorityPicker from "./priority-picker/index.vue"
const SELECTED_PRIORITY = 'medium'
defineProps({
  selectedPriority: {
    default: SELECTED_PRIORITY
  }
})
const startDate = ref()
const endDate = ref()
const quota = ref()
const priority = ref()
const handleOnPrioritySelect = (v: string) => {
  priority.value = v
}
</script>

<style scoped></style>
