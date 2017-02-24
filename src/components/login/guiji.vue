<template>
<div class='modify_box'>
  <p class='m_title'>工单轨迹</p>
  <div class="modify_form">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <ul class="jifen_list">
        <li><p class="yhm"><span> [主题]:</span><span>咨询双色球规则</span></p></li>
        <li><p class="yhm"><span> [业务名称]: </span><span>福彩热线</span><span> [业务类型]: </span><span>彩票积分服务</span><span> [工单类型]: </span><span>咨询工单</span><span> [彩票种类]: </span><span>双色球</span></p></li>
        <li><p class="yhm"><span> [受理]:</span></p></li>
        <li><p class="yhm"><span> [受理人]: </span><span>1234(花千骨)</span><span> [受理时间]: </span><span>2016-01-01 12:00</span></p></li>
      </ul>
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
.jifen_list{list-style-type: none;margin:0;padding:0;}
.link_list{list-style-type: none;margin:0;padding:0;text-align: center;}
.link_list li{display: inline-block;padding:0 10px;}

</style>
