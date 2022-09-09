<template>
  <div class="left-container">
    <h3>Left 组件 -- {{ count }}</h3>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: "myRight",
  data() {
    return {
      count: 0
    };
  },
  methods: {},
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>

<style lang="less" scoped>
.left-container {
  padding: 1px 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
