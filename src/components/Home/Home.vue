<template>
  <div class="home">
    <div>
      <h1>This is Home Page.</h1>
    </div>
    <div>
      <left-child />
      <right-child />
    </div>
  </div>
</template>

<script>
import RightChild from "./RightChild";
import LeftChild from "./LeftChild";

export default {
  name: "home",
  components: { RightChild, LeftChild },
  created() {
    console.log("in home created");
  }
};
</script>
