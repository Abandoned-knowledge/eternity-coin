<script setup lang="ts">
import type { IUser } from "~/app/interfaces/interfaces";
import { Authorization } from "~/features/account/login";

definePageMeta({
  layout: false,
});

const warningMessage = ref<string | null>(null);

async function submitForm(event: Event) {
  const form = event.target as HTMLFormElement;

  const login = (form.querySelector('input[name="input_login"]') as HTMLInputElement).value;
  const password = (form.querySelector('input[name="input_password"]') as HTMLInputElement).value;

  if (!login) warningMessage.value = "Please, enter the login";
  else if (!password) warningMessage.value = "Please, enter the password";

  const user: IUser[] | string = await $fetch("/api/account/login", {
    method: "post",
    body: {
      login: login,
      password: password,
    },
  });

  if (typeof user == "string") {
    warningMessage.value = user;
  } else {
    warningMessage.value = null;
    Authorization(user[0]);
  }
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <form @submit.prevent="submitForm($event)" class="frame frame_chart flex h-fit w-[50%] flex-col items-center gap-5">
      <p class="title-text">Login</p>
      <Input class="w-full" :required="true" placeholder="login" outline-color="accent">Login</Input>
      <Input class="w-full" :required="true" placeholder="password" outline-color="accent">Password</Input>

      <p v-show="warningMessage" class="body-text body-text_lg text-red">{{ warningMessage }}</p>
      <button type="submit" class="button button_main">Sign In</button>
      <p class="body-text flex flex-col items-center gap-2">
        Do not you have an account?
        <a href="/register" class="uppercase text-link underline">create</a>
      </p>
    </form>
  </div>
</template>
