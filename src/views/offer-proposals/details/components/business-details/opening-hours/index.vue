<template>
  <h6>Opening hours *</h6>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Day</th>
        <th scope="col">Opening</th>
        <th scope="col">Closing</th>
        <th scope="col">Open or closed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="h in DAYS">
        <td class="text-capitalize">{{ h }}</td>
        <td>{{ hours[h].opening }}</td>
        <td>{{ hours[h].closing }}</td>
        <td>
          <span class="badge bg-danger" v-show="hours[h].isClosed === false">Closed</span>
          <span class="badge bg-success" v-show="hours[h].isClosed === true">Open</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const { hours } = defineProps(['hours'])
const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
</script>

<style scoped></style>
