<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>子组件的msg的值是: {{ msg }}</p>
    <p>子组件的user的值是: {{ user }}</p>
    <button @click="msg = '123'">修改msg</button>
    <button @click="user.name = 'uian'">修改user</button>
    <hr />
    <button @click="send">发送</button>
  </div>
</template>

<script>
import bus from "./eventBus.js";
export default {
  props: ["msg", "user"],
  data() {
    return {
      str: `a`
    };
  },
  methods: {
    send() {
      bus.$emit("share", this.str);
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
