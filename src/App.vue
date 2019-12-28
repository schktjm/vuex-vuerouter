<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div id="login-button" v-if="isLoggedin">
      <button @click="handleClick">logout</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log("App created");

    this.$store.dispatch("checkToken").then(res => {
      if (!res) {
        this.$router.push("/login").catch(err => {});
      }
    });
  },
  mounted() {
    console.log("App mounted");
  },
  computed: {},
  methods: {
    handleClick() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
