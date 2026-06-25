<script setup lang="ts">
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/domain/auth'
import { createCountry, findCountry, listCountries } from '@/domain/countries'

const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log("xxxx")
  const fn = async () => {
    try {
      const x = await signInWithEmailAndPassword("one@admin.com", "000000")
    } catch (error) {
      console.log(error)
    }
  }

  const fn2 = async () => {
    try {
      const x = await findCountry({
       id:"01KVV74CYF97JB80CRKSKBV60J"
       })
      console.log(x)
    } catch (error) {
      console.log(error)
    }
  }

  fn2()
}
</script>

<template>
  <div>
    <form @submit="handleOnSubmit">
      <button type="submit">foo</button>
    </form>
  </div>
</template>


<style scoped></style>