<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <button @click="flag = !flag">Toggle flag</button>
    <Test info="你好" v-if="flag"></Test>
    <hr />
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right";
import Test from "@/components/Test.vue";


export default {
  components: {
    Left,
    Right,
    Test,
  },
  data(){
    return {
      flag: true
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
