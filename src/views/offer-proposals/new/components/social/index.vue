<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Social</h3>
        <div class="form-group col-md-6">
          <label for="input-title">Website
            <small><button type="button" class="btn btn-sm"><a :href="website" target="_blank" v-if="website">Visit</a></button></small>
          </label>
          <input type="text" class="form-control" id="input-title" placeholder="Ex: https://www.pizza-example.com"
            v-model="website">
        </div>
        <div class="form-group col-md-6">
          <label for="input-title">Instagram <small><button type="button" class="btn btn-sm"><a :href="instagram" target="_blank"
                  v-if="instagram">Visit</a></button></small>
          </label>
          <input type="text" class="form-control" id="input-title"
            placeholder="Ex: https://www.instagram.com/@pizza-example" v-model="instagram">
        </div>
        <div class="form-group col-md-6">
          <label for="input-title">Facebook <small><button type="button" class="btn btn-sm"><a :href="facebook" target="_blank"
                  v-if="facebook">Visit</a></button></small>
          </label>
          <input type="text" class="form-control" id="input-title"
            placeholder="Ex: https://www.facebook.com/pizza-example" v-model="facebook">
        </div>
        <div class="form-group col-md-6">
          <label for="input-title">WhatsApp <small><button type="button" class="btn btn-sm"><a :href="whatsapp" target="_blank"
                  v-if="whatsapp">Call</a></button></small>
          </label>
          <input type="text" class="form-control" id="input-title" placeholder="Ex: +123 456 7890" v-model="whatsapp">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps(['website', 'facebook', 'instagram', 'whatsapp'])
const website = ref()
const facebook = ref()
const instagram = ref()
const whatsapp = ref()
onMounted(() => {
  website.value = props.website
  facebook.value = props.facebook
  instagram.value = props.instagram
  whatsapp.value = props.whatsapp
})
defineExpose({ website, facebook, instagram, whatsapp })
</script>

<style scoped></style>
