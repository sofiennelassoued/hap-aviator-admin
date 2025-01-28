<template>

  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Business Details</h3>
        <div class="form-group col-md-6">
          <label for="input-business-name">Name</label>
          <input type="text" class="form-control" id="input-business-name" placeholder="Ex: Happy Pizza">
        </div>
        <div class="form-group col-md-6">
          <label for="input-business-representative">Representative</label>
          <input type="text" class="form-control" id="input-business-representative" placeholder="Ex: Bob Black">
        </div>
        <div class="form-group col-md-6">
          <label for="input-location">Location</label>
          <input type="text" class="form-control" id="input-location" placeholder="Ex: Pizza 4 seasons">
        </div>
        <div class="form-group col-md-6">
          <label for="input-address">Address</label>
          <textarea class="form-control" id="input-address" placeholder="Ex: One article each week"></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="input-email">Email</label>
          <input type="text" class="form-control" id="input-email" placeholder="Ex: Pizza 4 seasons">
        </div>
        <div class="form-group col-md-6">
          <label for="input-phone">Phone</label>
          <input type="text" class="form-control" id="input-phone" placeholder="Ex: Happy Pizza">
        </div>
        <div class="mt-4"></div>
        <opening-hours />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>