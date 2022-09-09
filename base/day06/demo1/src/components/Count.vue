<template>
  <div>
    <h5>Count 组件</h5>
    <p>count的值是: {{ count }}</p>
    <button @click="count += 1">+1</button>

    <button @click="show">打印</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.init
    };
  },
  methods: {
    show(){
        console.log(this)
    }
  },
  // props是自定义属性, 允许使用者为自定义属性指定初始值
  props:{
    init: {
        default: 0,
        type: Number,
        required: true
    }
  }
};
</script>

<style lang="less"></style>
