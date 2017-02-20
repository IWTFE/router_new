<template>
  <div class='bgDiv'>
  <div class='login'>
    <div class="login_inner">
    <p class='user_title'>用户登录</p>
     <!-- 登录框 -->
     <el-form ref="ruleForm" :model="ruleForm" :rules='rules'>
       <el-form-item label="" prop="name">
         <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
       </el-form-item>
       <el-form-item label="" prop='pass'>
         <el-input v-model="ruleForm.pass" placeholder="密码"></el-input>
       </el-form-item>
        <el-form-item label="" prop='phone'>
         <el-input v-model.number="ruleForm.phone" placeholder="分机号"></el-input>
       </el-form-item>
       <el-row :gutter="12">
         <el-col :span="16"><div class="">
           <el-form-item label="" prop='checkma'>
             <el-input v-model="ruleForm.checkma" placeholder="验证码"></el-input>
           </el-form-item>
         </div></el-col>
         <el-col :span="8"><div>
             <a href='javascript:;'>
               <img src='static/img/radom.jpg'/>
             </a>
         </div></el-col>
       </el-row>

       <el-form-item>
         <el-button type="primary" class='btnStyle' @click.native.prevent="handleSubmit2">登录</el-button>
       </el-form-item>
     </el-form>
   </div>
</div>
</div>
</template>
<style>
.bgDiv{position: absolute;width:100%;height: 100%;top:0;left:0;right:0;left:0;background:#282828}
.login {width:800px;height:420px;border:0px solid red;position:absolute;top:50%;margin-top:-210px;left:50%;margin-left:-400px;background:#fff url('../images/logo_bg.png') no-repeat left;border-radius: 4px;overflow:hidden;}
.login_inner{
  float:right;
  width:303px;
  border:0px solid red;
  padding:40px 20px 0 20px;
}
.btnStyle{width:100%;background:#22b7b5;border:0;}
.el-button--primary:focus, .el-button--primary:hover {
    background: #22b7b5;
    border-color: #22b7b5;
    color: #fff;
    border:0;
  }
.user_title{float:left;margin-bottom:25px;}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
}
.row-bg {
  background-color: #f9fafc;
}
</style>
<script>
  import { requestLogin } from '../api/api'
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          pass: '',
          phone: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 4, max: 6, message: '用户名为 4 到 16 个字符或数字', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '密码为 6 到 20 个字符', trigger: 'blur' }
          ],
          phone: [
            {type: 'number', message: '分机必须为数字值'}
          ],
          checkma: [
            { min: 4, max: 4, message: '校验码为错误', trigger: 'blur' }
          ]

        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleReset2 () {
        this.$refs.ruleForm.resetFields()
      },
      handleSubmit2 (ev) {
       // var _this = this
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            var loginParams = { username: this.ruleForm.name, password: this.ruleForm.pass }
            requestLogin(loginParams).then(data => {
              let {msg, code, user} = data
              if (code !== 200) {
                this.$notify({
                  title: '错误',
                  message: msg,
                  type: 'error'
                })
              } else {
                // window.alert('1')
                window.sessionStorage.setItem('user', JSON.stringify(user))
                this.$router.push({ path: '/welcome?id=1&name=欢迎页' })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }

    }
  }
</script>
