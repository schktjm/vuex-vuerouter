<template>
  <div class="home">
    <div>
      <h1>This is Home Page.</h1>
      <h2>{{greet}}</h2>
    </div>
    <div id="container">
      <child content="right" />
      <child content="left" />
    </div>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "home",
  components: { Child },
  created() {
    console.log("home created");
    this.setGreet();
  },
  computed: {
    greet() {
      return this.$store.getters.getGreet("home") || "hoge";
    }
  },
  methods: {
    async setGreet() {
      return this.$store.dispatch("setGreet", {
        content: "home",
        onError: () => console.error("home invalid")
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
</style>