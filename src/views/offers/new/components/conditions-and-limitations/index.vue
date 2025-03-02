<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Conditions & Limitations</h3>
        <div class="form-group col-md-6">
          <label for="input-conditions">Conditions</label>
          <textarea class="form-control" id="input-conditions" placeholder="Ex: You must be over 18"
            v-model="conditions"></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="input-conditions">Limitations</label>
          <textarea class="form-control" id="input-limitations" placeholder="Ex: One article each week"
            v-model="limitations"></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="input-reservation-required">Reservation required</label>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="reservation-required" v-model="reservationRequired">
            <label class="form-check-label" for="reservation-required">Check</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps(['conditions', 'limitations', 'reservationRequired'])
const conditions = ref()
const limitations = ref()
const reservationRequired = ref()
onMounted(() => {
  conditions.value = props.conditions
  limitations.value = props.limitations
  reservationRequired.value = props.reservationRequired
})
defineExpose({ conditions, limitations, reservationRequired })
</script>

<style scoped></style>
