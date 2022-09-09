<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'cb' + id"
          :checked="state"
          @change="stateChange"
        />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="picture" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥ {{ price }}</span>
        <!-- 商品数量 -->
        <!-- <Counter :num="count" :id="id"></Counter> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter.vue";
export default {
  props: {
    // id
    id: {
      required: true,
      type: Number
    },
    // 标题
    title: {
      default: "",
      type: String
    },
    // 图片
    picture: {
      default: "",
      type: String
    },
    // 价格
    price: {
      default: 0,
      type: Number
    },
    // 是否选择
    state: {
      default: true,
      type: Boolean
    },
    // 商品的购买数量
    count: {
      default: 1,
      type: Number
    }
  },
  methods: {
    stateChange(e) {
      const newState = e.target.checked;
      this.$emit("state-change", { id: this.id, value: newState });
    }
  },
  components: {
    Counter
  }
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
}
</style>
