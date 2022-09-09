<template>
  <div>
    <button type="button" @click="sub">-</button>
    <span class="number-box">{{ num }}</span>
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  methods: {
    add() {
      this.$emit("num-change", this.num + 1);
    },
    sub() {
      if (this.num - 1 === 0) return;
      this.$emit("num-change", this.num - 1);
    }
  }
};
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}
</style>
