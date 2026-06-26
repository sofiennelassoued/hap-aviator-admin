<template>
  <main class="root d-flex align-items-center">
    <div class="form-sign-in" @submit.prevent="handleOnSubmit">
      <form>
        <h1 class="h1 mb-3 fw-normal">Hap Pilot Admin</h1>
        <h3 class="h3 mb-3 fw-normal">Please sign in</h3>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required
            v-model="email" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required
            v-model="password" />
          <label for="floatingPassword">Password</label>
        </div>
        <!--         
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div> -->
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-2 mb-3 alert alert-danger" v-if="error">{{ error }}</p>
        <p class="mt-5 mb-3 text-muted">&copy; All copy rights reserved</p>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>

import { signInWithEmailAndPassword } from "@/domain/auth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const error = ref("");

const handleOnSubmit = () => {
  if (!email.value || !password.value) {
    alert("Please fill out all fields.");
    return;
  }

  const fn = async () => {
    error.value = ""
    try {
      await signInWithEmailAndPassword(email.value, password.value);
    } catch (e: any) {
      console.log(e);
      error.value = e.message
    }
  };
  fn();
}
</script>

<style scoped>
.root {
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
}

.form-sign-in {
  background-color: white;
  max-width: 420px;
  padding: 48px;
  margin: auto;
  border-radius: 32px;
}

.form-sign-in .checkbox {
  font-weight: 400;
}

.form-sign-in .form-floating:focus-within {
  z-index: 2;
}

.form-sign-in input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-sign-in input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>