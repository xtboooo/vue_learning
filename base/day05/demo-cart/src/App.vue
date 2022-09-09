<template>
  <div class="app-container">
    <!-- Header 头部区域 -->
    <Header title="购物车案例"> </Header>
    <!-- 循环渲染每一个商品的信息 -->
    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :picture="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :count="item.goods_count"
      @state-change="getNewState"
    ></Goods>
    <!-- Footer区域 -->
    <Footer
      :isfull="fullState"
      :amount="amt"
      :all="total"
      @full-change="getFullState"
    ></Footer>
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/Header/Header.vue";
import Goods from "./components/Goods/Goods.vue";
import Footer from "./components/Footer/Footer.vue";

import bus from "@/components/eventBus.js";

export default {
  created() {
    // 调用请求数据的方法
    this.initCarList();
    bus.$on("share", value => {
      this.list.some(item => {
        if (item.id === value.id) {
          item.goods_count = value.value;
          return true;
        }
      });
    });
  },
  data() {
    return {
      // 用来存储购物车的列表数据, 默认为空数组
      list: []
    };
  },
  methods: {
    // 封装请求列表数据的方法
    async initCarList() {
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      if (res.status == 200) {
        this.list = res.list;
      }
    },
    // 接收子组件传递过来的数据
    getNewState(e) {
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
    getFullState(val) {
      this.list.forEach(element => {
        element.goods_state = val;
      });
    }
  },
  components: {
    Header,
    Goods,
    Footer
  },
  computed: {
    fullState() {
      return this.list.every(item => item.goods_state);
    },
    amt() {
      return this.list
        .filter(item => item.goods_state)
        .reduce((amt, item) => (amt += item.goods_price * item.goods_count), 0);
    },
    total() {
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => (total += item.goods_count), 0);
    }
  }
};
</script>

<style lang="less">
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
