<template>
  <div class="test-box">
    <h3>test {{ username }}</h3>
    <button @click="changeName">修改用户名</button>
  </div>
</template>

<script>
// 固定写法
export default {
  //   data: {
  //     // 组件里的data不能指向对象, 必须是函数
  //     username: "xtbo"
  //   }
  data() {
    return {
      username: "xtbo"
    };
  },

  methods: {
    changeName() {
      // 在组件中, this就是当前组件的实例对象
      console.log(this);
      this.username = "uian";
    }
  }
};
</script>

<style lang="less">
.test-box {
  background-color: pink;
  h3 {
    color: red;
  }
}
</style>
