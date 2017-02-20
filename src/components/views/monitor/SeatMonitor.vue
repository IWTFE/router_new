<template>
<section>
  <!--工具条-->
  <el-col :span="24" class="toolbar">
    <el-form :inline="true" :model="filters">
      <el-form-item>
        <el-button type="primary" @click="getZs">test</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      filters: {
        name: '',
        birth: ''
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      editFormVisible: false, // 编辑界面显是否显示
      editFormTtile: '编辑', // 编辑界面标题
      // 编辑界面数据
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
      },
      editLoading: false,
      btnEditText: '提 交',
      editFormRules: {
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    // 获取zs的值
    getZs() {
      axios.get('/user/12345')
        .then(function(response) {
          console.log(response.data)
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.headers)
          console.log(response.config)
        });
    }
  }
}
</script>

<style scoped>

</style>
