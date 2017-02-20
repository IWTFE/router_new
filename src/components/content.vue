<template>
   <div class='conDiv'>
     <v-ad></v-ad>
     <el-breadcrumb separator="/">
       <el-breadcrumb-item to="/addpro/welcome">首页</el-breadcrumb-item>
       <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
     </el-breadcrumb>
     <router-view></router-view>
   </div>
</template>
<script>
import ad from 'components/ad.vue'
import addpro from 'components/views/addPro.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    'v-ad': ad,
    'v-addpro': addpro
  }
}
</script>
<style>
  .conDiv{margin-top:65px;}
</style>
