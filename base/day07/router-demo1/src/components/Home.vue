<template>
  <div class="home-container">
    <h3>home</h3>
    <hr />
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: cyan;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
