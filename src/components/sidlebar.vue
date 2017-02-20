<!--侧边栏-->
<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router theme="dark" unique-opened>
    <el-menu-item index="/welcome?id=1&name=欢迎页">系统菜单</el-menu-item>
     <el-menu-item index="/main?id=1&name=首页">首页</el-menu-item>

      <el-menu-item index="/addpro/neworder?id=6&name=新建工单弹屏">新建工单弹屏</el-menu-item>
     <el-submenu index="1">
       <template slot="title">坐席监控</template>
         <el-menu-item index="/addPro/SeatMonitor?id=3&name=座席监控">座席监控</el-menu-item>
       </el-submenu>
     </el-submenu>
      <el-menu-item index="/addpro/waitingTask?id=2&name=待处理任务">待处理任务</el-menu-item>
      <el-menu-item index="/addpro/custom_manager?id=5&name=客户管理">客户管理</el-menu-item>
     <el-submenu index="2">
       <template slot="title">统计查询</template>
         <el-menu-item index="/addpro/callin?id=4&name=统计查询">统计查询</el-menu-item>
       </el-submenu>
     </el-submenu>
   </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      to_: '',
      from_: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeRouterEnter (to, from, next) {
    // sss
  }
}
</script>
<style>
</style>
