<template>
<router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$router.push("loginIndex")
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
