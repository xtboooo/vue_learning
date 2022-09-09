<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <!-- 推荐用router-link替代a链接 -->
    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->
    <router-link to="/home">home</router-link>
    <router-link to="/movie">movie</router-link>
    <router-link to="/about">about</router-link>

    <hr />
    <!-- <div class="box">
      <Left> </Left>
      <Right></Right>
    </div> -->

    <!-- 占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Left from '@/components/Left.vue'
// import Right from '@/components/Right.vue'
export default {
  name: 'App',
  components: {
    // Left,
    // Right
  }
}
</script>

<style lang="less" scoped>
// .box {
//   display: flex;
// }
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
}
</style>
