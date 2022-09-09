<template>
  <div class="right-container">
    <h3>Right 组件 count: {{ count }}</h3>
    <button @click="add">+1</button>
    <hr />
    <p>{{ msgFromLeft }}</p>
  </div>
</template>

<script>
import bus from "./eventBus.js";
export default {
  data() {
    return {
      // 子组件自己的数据, 将来希望把count值传给父组件
      count: 0,
      msgFromLeft: ""
    };
  },
  methods: {
    add() {
      this.count += 1;
      this.$emit("numChange", this.count);
    }
  },
  created() {
    bus.$on("share", val => {
      console.log("share", val);
      this.msgFromLeft = val;
    });
  }
};
</script>

<style lang="less">
.right-container {
  padding: 1px 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
