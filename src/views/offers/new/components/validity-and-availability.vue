<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Validity & Availability</h3>
        <div class="form-group col-md-6">
          <label for="input-start-date">Start date</label>
          <input type="date" class="form-control" id="input-start-date">
        </div>
        <div class="form-group col-md-6">
          <label for="input-end-date">End date</label>
          <input type="password" class="form-control" id="input-end-date">
        </div>
        <div class="form-group col-md-6">
          <label for="input-stock-or-quota">Stock/Quota</label>
          <input type="number" class="form-control" id="input-stock-or-quota" placeholder="Ex: 10">
        </div>
        <div class="form-group col-md-6">
          <label for="input-priority">Priority</label>
          <input type="text" class="form-control" id="input-priority" placeholder="Ex: Pizza 4 seasons">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>