<template>
  <div>
  <el-row class="elDiv">
  <el-col :span="24">
    <div class="content_bg">
    <!--tab表格-->
    <el-tabs type="border-card">
      <el-tab-pane label="客户信息">
        <!--客户信息-->
        <p class='talkDiv'>欢迎致电福彩热线,*******************,话术</p>
        <el-form ref="form" :model="form" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-form-item label="客户姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">
              <el-form-item label="手　　机">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-form-item label="固　　话">
                <el-input v-model="form.name" class='phoneDiv1'></el-input><span class="pline"> - </span>
                <el-input v-model="form.name" class='phoneDiv2'></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
              <el-button type="primary">保存用户信息</el-button>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-form-item label="VIP用户">
                <el-radio class="radio" v-model="radio" label="1">是</el-radio>
                <el-radio class="radio" v-model="radio" label="2">否</el-radio>
              </el-form-item>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">
              <el-form-item label="性别">
                <el-radio class="radio" v-model="radio" label="1">男</el-radio>
                <el-radio class="radio" v-model="radio" label="2">女</el-radio>
              </el-form-item>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-form-item label="出生日期">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">
              <el-form-item label="年龄段">
                <el-select v-model="value" placeholder="请选择">
                 <el-option
                   v-for="item in options"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter='20'>
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <el-form-item label="所在地址">
                  <el-select v-model="value" placeholder="请选择">
                   <el-option
                     v-for="item in options"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                 <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select v-model="value" placeholder="请选择">
                 <el-option
                   v-for="item in options"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-form-item label="详细地址">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">
              <span>建档时间：</span><span>2016-12-26 17:00:00</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
              <span>最后一次联系时间：</span><span>2016-12-26 17:00:00</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
                <span>累计来电：</span><span>5次</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
                <span>累计工单数：</span><span>10</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              <span>业务类型：</span><span>福彩热线</span>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">
              <span>客户采种类型:</span><span>双色球/七乐彩</span>
            </div></el-col>
          </el-row>
        </el-form>
        <!--客户信息-->
      </el-tab-pane>
      <el-tab-pane label="工单信息">工单信息</el-tab-pane>
    </el-tabs>
    <div class='btnDiv'>
      <el-button :plain="true" :disabled="false">暂存工单</el-button>
      <el-button :plain="true" :disabled="false">提交工单</el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button :plain="true" :disabled="false">查看积分</el-button>
      <el-button :plain="true" :disabled="false">发送语音</el-button>
    </div>
    </div>
</el-col>
</el-row>
<el-row class="elDiv1">
<el-col :span="24">
  <div class="content_bg">
  <!--tab表格-->
  <el-tabs type="border-card">
    <el-tab-pane label="客户信息">
      <!--客户信息-->
      <el-form ref="form" :model="form" label-width="120px">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">
            <el-form-item label="客户姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">
            <el-form-item label="手　　机">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple">
            <el-form-item label="最后联系时间" class="new_width">
              <el-input v-model="form.name" class='phoneDiv2'></el-input><span class="pline"> - </span>
              <el-input v-model="form.name" class='phoneDiv2'></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">
             <el-button type="primary">新增</el-button>
          </div></el-col>
          <el-col :span="12" :offset='6'><div class="grid-content bg-purple_1">
            <el-button type="primary">查询</el-button>
             <el-button type="primary">重置</el-button>
          </div></el-col>
        </el-row>
        <el-row :gutter="20">
          <div class="grid-content bg-purple_2">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="序列号" ></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="phone1" label="手机1"></el-table-column>
                <el-table-column prop="phone2" label="手机2"></el-table-column>
                <el-table-column prop="call" label="固话"></el-table-column>
                <el-table-column prop="both" label="出生日期"></el-table-column>
                <el-table-column prop="addr1" label="所在省"></el-table-column>
                <el-table-column prop="addr2" label="所在市"></el-table-column>
                <el-table-column prop="addr3" label="所在区县"></el-table-column>
                <el-table-column prop="addr4" label="详细地址"></el-table-column>
                <el-table-column prop="vip" label="VIP"></el-table-column>
                <el-table-column prop="time" label="建档时间"></el-table-column>
                <el-table-column prop="lastime" label="最后联系时间"></el-table-column>
                <el-table-column prop="count" label="累计次数"></el-table-column>
                <el-table-column label="操作">
                 <template scope="scope">
                   <el-button
                     size="small"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                   <el-button
                     size="small"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                 </template>
               </el-table-column>
              </el-table>
    </div>
        </el-row>



      </el-form>
      <!--客户信息-->
    </el-tab-pane>
    <el-tab-pane label="工单信息">工单信息</el-tab-pane>
  </el-tabs>
  <div class='btnDiv'>
    <el-button :plain="true" :disabled="false">暂存工单</el-button>
    <el-button :plain="true" :disabled="false">提交工单</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button :plain="true" :disabled="false">查看积分</el-button>
    <el-button :plain="true" :disabled="false">发送语音</el-button>
  </div>
  </div>
</el-col>
</el-row>
</div>
</template>
<style>
.content_bg {
  background:#eeeeee;
  position: relative;
  margin:20px 0 0 0;
}
.content_bg .el-tabs--border-card>.el-tabs__header {
    background-color: #eeeeee;
    margin: 0;
}
.btnDiv{position: absolute;right:0;border:0px solid green;top:6px;padding:0 5px 0 0;margin-bottom:30px;}
.content_bg .el-button {
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
  }
  .content_bg .el-input__inner {
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    display: block;
    font-size: inherit;
    height: 32px;
    line-height: 1;
    padding: 2px 5px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.el-select {
    display: inline-block;
    position: relative;
    padding: 0 10px;
}
.talkDiv{color:red;text-align:left;}
.content_bg .phoneDiv1{width:40px;float: left;}
.content_bg .phoneDiv2{width:170px;float: left;}
.content_bg .pline{float: left;padding:0 5px;}
.elDiv{padding:0;margin:0;}
.elDiv1{padding:0;margin-top:50px;}
.content_bg .saveInfo{background: #22b7b5;color: #fff;}
.content_bg .new_width .el-form-item__label { width:120px;text-align:left;}
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 0px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
    text-align:left;
  }
  .bg-purple_1 {
    background: #fff;
    text-align:right;
  }
  .bg-purple_2 {
    background: #fff;
    margin-top:20px;
    padding: 0 10px;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: -px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
<script>
  export default {
    data () {
      return {
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
        value: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        radio: '1',
        tableData: [{
          id: 1,
          name: '王小虎',
          phone1: 15801030114,
          phone2: 15801030116,
          call: 88715986,
          both: '1982-03-13',
          sex: '女',
          addr1: '北京市',
          addr2: '无',
          addr3: '石景山区',
          addr4: '金顶街',
          vip: '是',
          time: '2002-03-13',
          lastime: '2010-3-13',
          count: 1
        }]
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
