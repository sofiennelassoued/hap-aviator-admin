<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Pricing</h3>
        <div class="form-group col-md-6">
          <label for="input-points">Points *</label>
          <input type="number" class="form-control" id="input-points" placeholder="Ex: 100" min="0" required
            v-model.number="points">
        </div>
        <div class="form-group col-md-6">
          <label for="input-points">Offer type *</label>
          <type-picker :selected="type" @select="handleOnSelectType" />
        </div>
        <template v-if="type === 'with-price'">
          <div class="form-group col-md-4">
            <label for="input-original-price">Original price *</label>
            <input type="number" class="form-control" id="input-original-price" min="0" placeholder="Ex: 20" required
              v-model.number="price" @input="handleOnOriginalPriceInput">
          </div>
          <div class="form-group col-md-4">
            <label for="input-price-after-discount">Price after discount</label>
            <input type="text" class="form-control" id="input-price-after-discount" placeholder="Ex: 10" required
              v-model="priceAfterDiscount" @input="handleOnPriceAfterDiscountInput">
          </div>
          <div class="form-group col-md-4">
            <label for="input-discount">Discount (percentage) *</label>
            <input type="number" class="form-control" id="input-discount" min="0" max="100" placeholder="Ex: 50"
              disabled v-model.number="discount">
          </div>
          <div id="help-input-price-after-discount" class="form-text">Formula: Discount = (Original Price * (100 - Price
            After
            Discount)) / 100</div>
        </template>
        <template v-if="type === 'with-discount'">
          <div class="form-group col-md-4">
            <label for="input-original-price">Original price *</label>
            <input type="number" class="form-control" id="input-original-price" min="0" placeholder="Ex: 20" required
              v-model.number="price" @input="handleOnOriginalPriceInput">
          </div>
          <div class="form-group col-md-4">
            <label for="input-discount">Discount (percentage) *</label>
            <input type="number" class="form-control" id="input-discount" min="0" max="100" placeholder="Ex: 50"
              required v-model.number="discount" @input="handleOnDiscountInput">
          </div>
          <div class="form-group col-md-4">
            <label for="input-price-after-discount">Price after discount</label>
            <input disabled type="text" class="form-control" id="input-price-after-discount" placeholder="Ex: 10"
              v-model="priceAfterDiscount">
          </div>
          <div id="help-input-price-after-discount" class="form-text">Formula: Price After Discount = (Original Price *
            (100 - Discount)) / 100</div>
        </template>
        <template v-if="type === 'full-discount'">
          <div class="form-group col-md-6">
            <label for="input-original-price">Price *</label>
            <input type="number" class="form-control" id="input-original-price" min="0" placeholder="Ex: 20" required
              v-model.number="price" @input="handleOnOriginalPriceInput">
          </div>
          <div id="help-input-price-after-discount" class="form-text">Formula: Discount (100%)</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TypePicker from "@/components/miscs/forms/type-picker/index.vue";
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

  if (type.value === "with-price") {
    calculatePriceAfterDiscount()
  } else if (type.value === "with-discount") {
    calculateDiscount()
  } else if (type.value === "with-points") {
    // Points only
  }
})
// TODO: Check formulas
const handleOnOriginalPriceInput = () => {
  calculatePriceAfterDiscount()
}
const handleOnPriceAfterDiscountInput = () => {
  calculateDiscount()
}
const handleOnDiscountInput = () => {
  calculatePriceAfterDiscount()
}
const handleOnSelectType = (v: string) => {
  type.value = v
}
const calculatePriceAfterDiscount = () => {
  if (!isNaN(price.value) && !isNaN(discount.value) && price.value > 0 && discount.value > 0) {
    const result = (price.value * (100 - discount.value)) / 100
    priceAfterDiscount.value = Number(result.toFixed(2))
  }
}
const calculateDiscount = () => {
  if (!isNaN(price.value) && !isNaN(priceAfterDiscount.value) && price.value > 0 && priceAfterDiscount.value > 0) {
    const result = (price.value * (100 - priceAfterDiscount.value)) / 100
    discount.value = Number(result.toFixed(2))
  }
}
defineExpose({ points, price, discount, type })
</script>

<style scoped></style>
