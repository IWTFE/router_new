<template>
<div class='submit_box'>
  <p class='m_title'>提交工单</p>
  <div class="submit_form">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <p class='tishi_'>您的工单提交成功！工单编号为:************</p>
    </el-form>
  </div>
  <div slot="footer" class="dialog-footer">

    <el-button type="primary" class="fonfirm">关闭</el-button>
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
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
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
  font-size: 18px;
}

.modify_form {
  width: 460px;
  margin: auto;
  text-align: left;
  padding: 0 0 20px 0
}

.yhm {
  padding: 3px 38px;
}
.submit_box{}
.submit_form{width:400px;margin:auto;text-align:center;padding:50px 0 150px 0;}
.tishi_{color:#555555}
.el-button {border:0}
</style>
