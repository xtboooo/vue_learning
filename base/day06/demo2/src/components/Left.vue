<template>
  <div class="left-container">
    <h3>Left 组件 -- {{ count }}</h3>
    <hr />
    <slot name="default">这是default插槽的默认内容</slot>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left-container {
  padding: 1px 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
