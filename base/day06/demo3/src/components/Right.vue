<template>
  <div class="right-container">
    <h3>Right组件</h3>
    <button @click="postInfo">POST</button>
    <button @click="getBookInfos">获取图书列表数据</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('api/post', { name: 'zs', age: 20 })
      console.log(res)
    },
    async getBookInfos() {
      const { data: res } = await this.$http.get('api/getBooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.right-container {
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
