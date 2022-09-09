<template>
  <div class="left-container">
    <h3>Left 组件 count {{ count }}</h3>
    <button @click="count += 1">+1</button>
    <button @click="resetCount">重置</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    resetCount() {
      this.count = 0;
    }
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
