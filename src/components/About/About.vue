<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "my-page",
  components: {},
  created() {
    console.log("About created");
  },
  mounted() {
    console.log("About mounted!");
  },
  computed: {
    loggedIn() {
      return this.$store.state.IsLoggedIn;
    }
  }
};
</script>
