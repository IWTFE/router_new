<template>
<div class='modify_box'>
  <p class='m_title'>工单轨迹</p>
  <div class="modify_form">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <ul class="jifen_list">
        <li><p class="yhm"><span> 积分卡号：</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 卡关联手机号： </span><span>13601030115</span></p></li>
        <li><p class="yhm"><span> 积分卡号：</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 全国积分(分)： </span><span>13601030115</span></p></li>
        <li><p class="yhm"><span> 省级积分(分)</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 游戏币(个)： </span><span>13601030115</span></p></li>
        <li><p class="yhm"><span> 彩票(电脑票)(注)：</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 彩票(即开奖)(注)： </span><span>13601030115</span></p></li>
        <li><p class="yhm"><span> 彩金(元)：</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 用户类型：********** </span><span>13601030115</span></p></li>
        <li><p class="yhm"><span> 启用时间：*******</span><span>CCTV</span></p></li>
        <li><p class="yhm"><span> 卡关联手机号： </span><span>13601030115</span></p></li>
      </ul>
      <ul class='link_list'>
        <li><a href='javascript'>查询积分明细</a></li>
        <li><a href='javascript'>查询订购的产品明细</a></li>
        <li><a href='javascript'>查询当前生效的服务明细</a></li>
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
