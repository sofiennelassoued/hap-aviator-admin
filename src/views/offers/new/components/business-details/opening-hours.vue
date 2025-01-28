<template>
  <h6>Opening hours</h6>
  <div class="form-group col-md-6">
    <label for="input-monday-opening-hour">Monday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-monday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-monday-closing-hour">Monday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-monday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-tuesday-opening-hour">Tuesday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-tuesday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-tuesday-closing-hour">Tuesday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-tuesday-closing-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-wednesday-opening-hour">Wednesday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-wednesday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-wednesday-closing-hour">Wednesday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-wednesday-closing-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-thursday-opening-hour">Thursday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-thursday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-thursday-closing-hour">Thursday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-thursday-closing-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-friday-opening-hour">Friday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-friday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-friday-closing-hour">Friday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-friday-closing-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-saturday-opening-hour">Saturday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-saturday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-saturday-closing-hour">Saturday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-saturday-closing-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-sunday-opening-hour">Sunday opening hour <button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'opening')">Fill opening
        hours</button></label>
    <input type="time" class="form-control" id="input-sunday-opening-hour">
  </div>
  <div class="form-group col-md-6">
    <label for="input-sunday-closing-hour">Sunday closing hour<button class="btn btn-simple btn-sm text-info"
        @click="handleOnClickFill('', 'closing')">Fill closing
        hours</button></label>
    <input type="time" class="form-control" id="input-sunday-closing-hour">
  </div>
</template>

<script setup lang="ts">
const handleOnClickFill = (day: string, type: 'opening' | 'closing') => { }
</script>

<style scoped></style>