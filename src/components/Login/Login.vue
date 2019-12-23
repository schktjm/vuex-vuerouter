<template>
  <div>
    <p>This is Login Page.</p>
    <button @click="login">Login</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "login",
  methods: {
    async login() {
      console.log("login");
      await this.$store.dispatch("login");
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>