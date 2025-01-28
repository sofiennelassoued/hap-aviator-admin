<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Pricing</h3>
        <div class="form-group col-md-6">
          <label for="input-points">Points</label>
          <input type="number" class="form-control" id="nput-points" placeholder="Ex: Pizza 4 seasons">
        </div>
        <div class="form-group col-md-6">
          <label for="input-discount">Discount</label>
          <input type="number" class="form-control" id="input-discount" placeholder="Ex: Happy Pizza">
        </div>
        <div class="form-group col-md-6">
          <label for="input-original-price">Original Price</label>
          <input type="number" class="form-control" id="input-original-price" placeholder="Ex: Pizza 4 seasons">
        </div>
        <div class="form-group col-md-6">
          <label for="input-price-after-discount">Price after Discount</label>
          <input disabled type="text" class="form-control" id="input-price-after-discount"
            placeholder="Ex: Happy Pizza">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>