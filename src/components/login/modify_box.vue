<template>
<div class='modify_box'>
  <p class='m_title'>账号信息修改</p>
  <div class="modify_form">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <p class="yhm"><span> 用户名：</span><span>CCTV</span></p>
      <p class="yhm"><span> 手机号： </span><span>13601030115</span></p>
      <el-form-item label="手机验证码:">
        <el-input v-model.number="ruleForm2.age" style="width:240px;padding:0 10px 0 0"></el-input><el-button type="primary" class="fonfirm">获取</el-button>
      </el-form-item>
      <el-form-item label="新密码:">
        <el-input v-model.number="ruleForm2.age" style="width:350px;padding:0 10px 0 0"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码:">
        <el-input v-model.number="ruleForm2.age" style="width:350px;padding:0 10px 0 0"></el-input>
      </el-form-item>
    </el-form>
  </div>
  <div slot="footer" class="dialog-footer">
   <el-button @click="dialogFormVisible = false" class="cancel">重置</el-button>
   <el-button type="primary" @click="dialogFormVisible = false" class="fonfirm">确 定</el-button>
 </div>
</div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          validator: validatePass2,
          trigger: 'blur'
        }],
        age: [{
          validator: checkAge,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.m_title {
  text-align: center;
  font-size:18px;
}
.modify_form{width:460px;margin:auto;text-align:left;padding:0 0 20px 0}
.yhm{padding:3px 38px;}
</style>
