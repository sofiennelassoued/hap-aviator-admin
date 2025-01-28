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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const conditions = ref()
const limitations = ref()
</script>

<style scoped></style>
