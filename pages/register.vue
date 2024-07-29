<script setup lang="ts">
definePageMeta({
  layout: false,
});

const warningMessage = ref<string | null>(null);

async function submitForm(event: Event) {
  const form = event.target as HTMLFormElement;

  const name = (form.querySelector('input[name="input_name"]') as HTMLInputElement).value;
  const login = (form.querySelector('input[name="input_login"]') as HTMLInputElement).value;
  const password = (form.querySelector('input[name="input_password"]') as HTMLInputElement).value;
  const repeat_password = (form.querySelector('input[name="input_repeat_password"]') as HTMLInputElement).value;

  if (!name) warningMessage.value = "Please, enter the name";
  if (!login) warningMessage.value = "Please, enter the login";
  else if (!password) warningMessage.value = "Please, enter the password";
  else if (password !== repeat_password) warningMessage.value = "Your passwords are not similar";
  else warningMessage.value = null;

  const user: [] | string = await $fetch("/api/account/register", {
    method: "post",
    body: {
      login: login,
      password: password,
      name: name,
    },
  });

  if (typeof user == "string") warningMessage.value = user;
  else return navigateTo("/login");
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <form @submit.prevent="submitForm($event)" class="frame frame_chart flex h-fit w-[50%] flex-col items-center gap-5">
      <p class="title-text">Login</p>
      <Input class="w-full" :required="true" placeholder="name" outline-color="accent">Name</Input>
      <Input class="w-full" :required="true" placeholder="login" outline-color="accent">Login</Input>
      <Input class="w-full" :required="true" placeholder="password" outline-color="accent">Password</Input>
      <Input class="w-full" :required="true" placeholder="repeat password" outline-color="accent"
        >Repeat Password</Input
      >
      <p v-show="warningMessage" class="body-text body-text_lg text-red">{{ warningMessage }}</p>
      <button type="submit" class="button button_main">Create</button>
      <p class="body-text flex flex-col items-center gap-2">
        Do you have an account?
        <a href="/login" class="uppercase text-link underline">Sign In</a>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
