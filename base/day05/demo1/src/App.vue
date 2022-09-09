<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置left组件中的count</button>
    <hr />
    <input type="text" v-if="inputVisible" @blur="showButton" ref="inputRef" />
    <button v-else @click="showInput">展示输入框</button>
    <div class="box">
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
export default {
  data() {
    return {
      inputVisible: false
    };
  },
  methods: {
    showButton() {
      this.inputVisible = false;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.inputRef.focus();
      });
    },
    showThis() {
      console.log(this);
      // this.$refs.myh1.style.color = "red";
    },
    onReset() {
      this.$refs.comLeft.resetCount();
    }
  },
  components: {
    Left
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
