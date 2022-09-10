<template>
  <div class="login-container">
    <div class="login-box">
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="form-login p-4">
        <div class="form-group form-inline"></div>
        <label for="username">登录名称</label>
        <input
          type="text"
          class="from-control ml-2"
          id="username"
          placeholder="请输入登录名称"
          autocomplete="off"
          v-model.trim="username"
        />
        <div class="form-group form-inline"></div>
        <label for="password">登录密码</label>
        <input
          type="text"
          class="from-control ml-2"
          id="password"
          placeholder="请输入登录密码"
          v-model.trim="password"
        />
        <div form-group form-inline d-flex justify-content-end>
          <button type="button" class="btn btn-secondary mr-2" @click="reset">
            重置
          </button>
          <button type="button" class="btn btn-primary mr-2" @click="login">
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset() {
      this.password = ''
    },
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        localStorage.setItem('token', 'Bearer ')
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  backface-visibility: #35495e;
  height: 100px;
  login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
