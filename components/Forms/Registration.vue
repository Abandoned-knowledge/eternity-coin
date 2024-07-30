<script setup lang="ts">
const warningMessage = ref<string | null>(null);

async function submitForm(event: Event) {
  const form = event.target as HTMLFormElement;

  const name = (form.querySelector('input[name="input_enter_the_name"]') as HTMLInputElement).value;
  const login = (form.querySelector('input[name="input_enter_the_email"]') as HTMLInputElement).value;
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
  <form @submit.prevent="submitForm($event)" class="frame frame_chart flex h-fit w-[50%] flex-col items-center gap-5">
    <p class="title-text">Login</p>

    <Input class="w-full" type="text" label="Name" placeholder="Enter the name" :required="true" />
    <Input class="w-full" type="email" label="Email" placeholder="Enter the email" :required="true" />
    <Input class="w-full" type="password" label="Password" placeholder="Password" :required="true" />
    <Input class="w-full" type="password" label="Password" placeholder="Repeat Password" :required="true" />

    <p v-show="warningMessage" class="body-text body-text_lg text-red">{{ warningMessage }}</p>
    <button type="submit" class="button button_main">Create</button>
    <p class="body-text flex flex-col items-center gap-2">
      Do you have an account?
      <a href="/login" class="uppercase text-link underline">Sign In</a>
    </p>
  </form>
</template>

<style lang="scss" scoped></style>
