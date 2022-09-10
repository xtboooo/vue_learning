<template>
  <div>
    <h4 class="text-center">用户管理</h4>
    <table class="table table-boarder table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>职位</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.position }}</td>
          <td>
            <a href="#" @click.prevent="goToDetail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyUsers',
  data() {
    return {
      userList: [
        { id: 1, name: 'a', age: 18, position: 'aa' },
        { id: 2, name: 'b', age: 19, position: 'bb' },
        { id: 3, name: 'c', age: 20, position: 'cc' },
        { id: 4, name: 'd', age: 21, position: 'dd' }
      ]
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push('/home/userinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped></style>
