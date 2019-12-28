<template>
  <div class="child">
    <h2>{{content}}</h2>
    <p>greet:{{greet}}</p>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    content: {
      type: String,
      default: "hoge"
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.content, "child created");
    this.setGreet();
  },
  computed: {
    greet() {
      return this.$store.getters.getGreet(this.content);
    }
  },
  methods: {
    async setGreet() {
      this.$store.dispatch("setGreet", {
        content: this.content,
        onError: () => console.error("child invalid")
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  box-sizing: border-box;
  width: 100%;
  margin: 30px;
  border: 3px solid #ffca28;
}
</style>
