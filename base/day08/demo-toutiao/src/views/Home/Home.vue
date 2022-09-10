<template>
  <div class="home-container">
    <van-nav-bar title="头条" fixed />
    <!-- 导入注册, 并使用ArticleInfo组件 -->
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <!-- 上拉加载 -->
      <van-list
        v-model="loading"
        finished-text="没有更多了"
        :finished="finished"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in articleList"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'

import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      limit: 10,
      articleList: [],
      // 是否正在加载下一页数据
      loading: true,
      // 所有数据是否加载完毕
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        this.articleList = [...res, ...this.articleList]
        this.isLoading = false
      } else {
        this.articleList = [...this.articleList, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 上拉底部刷新
    onLoad() {
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      this.page++
      this.initArticleList(true)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
</style>
