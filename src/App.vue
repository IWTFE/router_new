<template>
  <div id="app">
    <router-view></router-view>
    <!-- <v-footer></v-footer> -->
</template>
<script>
// import Mock from './mock'
// Mock.bootstrap()

export default {
  name: 'app',
  data () {
    return {
      tabIndex: 1
    }
  },
  components: {
  },
  watch: {
    '$route' (to, from) {
      // let user = JSON.parse(window.sessionStorage.getItem('user'))
      // if (!user) {
      //   this.$router.replace('/login')
      // }
    }
  },
  methods: {

  }
}
</script>

<style>
body {background:#fbfbfb;}
#app {
  font-family:'微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
