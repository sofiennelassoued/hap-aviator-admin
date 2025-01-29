<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Pricing</h3>
        <div class="form-group col-md-6">
          <label for="input-points">Points *</label>
          <input type="number"   class="form-control" id="input-points" placeholder="Ex: 100" min="0" required
            v-model.number="points">
        </div>
        <div class="form-group col-md-6">
          <label for="input-points">Offer type *</label>
          <type-picker :selected="type" @select="handleOnSelectType" />
        </div>
        <div class="form-group col-md-4">
          <label for="input-original-price">Original price *</label>
          <input type="number"   class="form-control" id="input-original-price" min="0" placeholder="Ex: 20" required
            v-model.number="price" @input="handleOnOriginalPriceInput">
        </div>
        <div class="form-group col-md-4">
          <label for="input-discount">Discount (percentage) *</label>
          <input type="number"   class="form-control" id="input-discount" min="0" max="100" placeholder="Ex: 50" required
            v-model.number="discount" @input="handleOnDiscountInput">
        </div>
        <div class="form-group col-md-4">
          <label for="input-price-after-discount">Price after discount</label>
          <input disabled type="text" class="form-control" id="input-price-after-discount" placeholder="Ex: 10"
            v-model="priceAfterDiscount">
          <div id="help-input-price-after-discount" class="form-text">Formula: (Original Price * Discount) / 100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TypePicker from "./type-picker/index.vue";
const props = defineProps(['points', 'price', 'discount', 'type'])

const points = ref()
const price = ref()
const discount = ref()
const priceAfterDiscount = ref()
const type = ref()
onMounted(() => {
  points.value = props.points
  price.value = props.price
  discount.value = props.discount
  type.value = props.type

  calculateDiscount()

  // TODO: Update this to use the correct type
  const SELECTED_TYPE = 'medium'
  type.value = SELECTED_TYPE
})
const handleOnOriginalPriceInput = () => {
  calculateDiscount()
}
const handleOnDiscountInput = () => {
  calculateDiscount()
}
const handleOnSelectType = (v: string) => {
  type.value = v
}
const calculateDiscount = () => {
  if (!isNaN(price.value) && !isNaN(discount.value) && price.value > 0 && discount.value > 0) {
    const result = (price.value * (100 - discount.value)) / 100
    priceAfterDiscount.value = Math.floor(result)
  }
}
defineExpose({ points, price, discount, type })
</script>

<style scoped></style>
