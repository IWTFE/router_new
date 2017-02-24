<template>
<div class='modify_box'>
  <p class='m_title'>工单处理</p>
  <div class="modify_form">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="处理表决:">
        <el-radio class="radio" v-model="radio" label="1">是</el-radio>
        <el-radio class="radio" v-model="radio" label="2">否</el-radio>
      </el-form-item>
      <p class="yhm1"><span> 重要投诉状态: </span><span>草稿</span>
        <el-button class="fonfirm">重要投诉受理单</el-button>
      </p>
      <el-form-item label="处理表决:">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="处理意见: ">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <p class="yhm1"><span> 处理人员: </span><span>zuo002</span></p>
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
      },
      radio: '1',
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

.yhm1 {
  padding: 3px 0px;
}
</style>
