<template>
  <div class="app-container">
    <h1>App 根组件 countFromSon: {{ countFromSon }}</h1>
    <p>父组件的msg的值是: {{ msg }}</p>
    <p>父组件的user的值是: {{ user }}</p>
    <hr />
    <div class="box">
      <Left :msg="msg" :user="user"></Left>
      <Right @numChange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  data() {
    return {
      msg: "hello vue",
      user: {
        name: "xtbo",
        age: 25
      },
      // 定义countFromSon来接受子组件传过来的数据
      countFromSon: 0
    };
  },
  components: {
    Left,
    Right
  },
  methods: {
    // 获取子组件传递过来的数据
    getNewCount(val) {
      console.log("numChange", val);
      this.countFromSon = val;
    }
  }
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
