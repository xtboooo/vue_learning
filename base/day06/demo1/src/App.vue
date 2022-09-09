<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <hr />

    <button @click="comName = 'Left'">展示Left</button>
    <button @click="comName = 'Right'">展示Right</button>

    <div class="box">
      <keep-alive include="myLeft">
        <components :is="comName"></components>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "./components/Right.vue";
export default {
  data() {
    return {
      // 要展示的组件名字
      comName: "Left"
    };
  },
  methods: {},
  components: {
    Left,
    Right
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
