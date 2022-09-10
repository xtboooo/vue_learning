<template>
  <div class="layout-header-container">
    <div class="layout-header-left">
      <img class="layout-header-left-img" src="../../assets/logo.png" alt="" />
      <h4 class="layout-header-left-title">后台管理</h4>
    </div>
    <div class="layout-header-right">
      <button type="button" class="btn btn-right" @click="logout">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped></style>
