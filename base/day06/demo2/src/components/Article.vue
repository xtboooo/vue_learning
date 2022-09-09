<template>
  <div class="article-container">
    <!-- 文章标题 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>
    <!-- 文章内容 -->
    <div class="content-box">
      <slot name="content" msg="hello vue" :user="user"></slot> 
      <p v-color="'red'">全局自定义指令测试</p>
    </div>
    <!-- 文章作者 -->
    <div class="footer-box">
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      user: {
        name: "xtbo",
        age: 25
      }
    };
  }
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
  .header-box {
    background-color: pink;
  }
  .content-box {
    background-color: lightblue;
  }
  .footer-box {
    background-color: lightsalmon;
  }
}
</style>
