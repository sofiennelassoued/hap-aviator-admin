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
          <label for="input-vibes">Vibes</label>
          <vibes-picker :selected="vibes" @select="handleOnVibesSelect" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VibesPicker from './vibes-picker/index.vue'
const props = defineProps(['conditions', 'limitations', 'vibes'])
const conditions = ref()
const limitations = ref()
const vibes = ref()
onMounted(() => {
  conditions.value = props.conditions
  limitations.value = props.limitations
  vibes.value = props.vibes
})
const handleOnVibesSelect = (v: string) => {
  vibes.value = v
}
defineExpose({ conditions, limitations, vibes })
</script>

<style scoped></style>
