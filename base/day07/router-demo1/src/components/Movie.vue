<template>
  <div class="movie-container">
    <h3>movie</h3>
  </div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: orange;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
