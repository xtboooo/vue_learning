<template>
  <div class="header-container">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "标题",
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.header-container {
  font-size: 12px;
  height: 45px;
  width: 100%;
}
</style>
