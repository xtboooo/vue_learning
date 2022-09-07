<template>
  <div class="test-container">
    <h3 id="myh3">Test 组件 ---{{ books.length }}本图书</h3>
    <p id="pppp">message的值是: {{ message }}</p>
    <button @click="message += '~'">修改 message的值</button>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      message: "hello vue",
      books: []
    };
  },
  methods: {
    show() {
      console.log("Test.show");
    },
    initBookList() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
        this.books = res.data;
      });
      xhr.open("GET", "http://www.liulongbin.top:3006/api/getbooks");
      xhr.send();
    }
  },
  beforeCreate() {
    //   console.log(this.info);
    //   console.log(this.message);
    //   this.show();
  },
  created() {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
    // this.initBookList();
  },
  beforeMount() {
    // console.log("beforeMount")
    // const dom = document.querySelector("#myh3")
    // console.log(dom)
    // console.log(this.$el);
  },
  mounted() {
    const dom = document.querySelector("#myh3");
    console.log(dom);
    console.log(this.$el);
  },
  beforeUpdate() {
    // // 数据会显示 ~+ 因为beforeUpdate只在数据被更新后触发
    // console.log("beforeUpdate"); // hello vue~
    // console.log(this.message);
    // const dom = document.querySelector("#pppp"); // message的值是: hello vue
    // console.log(dom.innerHTML);
  },
  // 但数据发生变化之后, 为了能够操作到最新的dom结构, 必须把代码写到updated生命周期函数中
  updated() {
    console.log("beforeUpdate");
    console.log(this.message); // hello vue~
    const dom = document.querySelector("#pppp"); // message的值是: hello vue~
    console.log(dom.innerHTML);
  }
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: pink;
  height: 250px;
}
</style>
