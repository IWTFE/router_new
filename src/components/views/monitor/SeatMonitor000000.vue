<template>
<section>
  <!--工具条-->
  <el-col :span="24" class="toolbar">
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="">sss
          <!-- <img src='http://192.168.88.40:8080/autoweb/captcha.do'> -->
          <!-- <img src='http://192.168.88.56/user/getVerifyCode.do'> -->
        </el-button>
      </el-form-item>
      <input type="button" @click="getZs" value="发请求">
    </el-form>
  </el-col>
</section>
</template>

<script>
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
  created() {
    // var userName = 'zwj3333'
    // var password = '33232323'
    // var shortSinglePhone = '133345455555'
    // var crmCorpInfoOid = '312312312312312312312312'
    // rest.post('http://192.168.88.56/user/getVerifyCode.do', {
    //   'body': {
    //     'userId': userName,
    //     'loginPwd': password,
    //     'shortSinglePhone': shortSinglePhone,
    //     'crmCorpInfoOid': crmCorpInfoOid
    //   },
    //   'businessId': 'CC_CRM_LOGIN'
    // }).then(function(res) {
    //   console.log(res)
    // }).catch(function(err) {
    //   console.log(err)
    // })
  },
  methods: {
    // 获取zs的值
    getZs() {
      // axios.get('http://192.168.88.40:8080/autoweb/order/orderItemListByUserPrecept.do', {user_precept_id: 1})
      //   .then(function (response) {
      //     console.log(response.data)
      //     console.log(response.status)
      //     console.log(response.statusText)
      //     console.log(response.headers)
      //     console.log(response.config)
      //   })
      // axios.post('http://192.168.88.40:8080/autoweb/captcha.do')
      //   .then(function (response) {
      //     console.log(response.data)
      //     console.log(response.status)
      //     console.log(response.statusText)
      //     console.log(response.headers)
      //     console.log(response.config)
      //   })
    },
    test() {
      // 传给post值
      // rest_.init()
    }
  }
}
</script>

<style scoped>

</style>
