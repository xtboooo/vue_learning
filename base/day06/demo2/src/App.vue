<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <hr />
    <Article>
      <template #title>
        <h3>a</h3>
      </template>
      <template #content="{ msg, user }" }>
        <h3>b</h3>
        <p>{{ msg }}</p>
        <p>{{ user.name }}</p>
      </template>
      <template #author>
        <h3>c</h3>
      </template>
    </Article>
    <hr />
    <div class="box" style="display: none"></div>
  </div>
</template>

<script>
import Article from "@/components/Article";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Article
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
