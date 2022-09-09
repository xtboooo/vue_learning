<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="cbFull"
        :checked="isfull"
        @change="fullChange"
      />
      <label classs="custom-control-label" for="cbFull"></label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计: </span>
      <span class="total-price"> ￥{{ amount.toFixed(2) }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">
      结算 ({{ all }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isfull: {
      default: true,
      type: Boolean
    },
    amount: {
      default: 0,
      type: Number
    },
    all: {
      type: Number,
      default: 0
    }
  },
  methods: {
    fullChange(e) {
      this.$emit("full-change", e.target.checked);
    }
  }
};
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100px;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
}
</style>
