<template>
<div class="waitingTask">
  <el-row>
    <el-col :span="24">
      <div class="bg-purple-dark_">
        <el-form ref="form" :model="form" label-width="100px">
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="业务名称：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="人工服务：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="业务类型：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="工单类型：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="工单编号：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="彩票种类：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="工单状态：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="受理人员：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="主题：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="客户姓名：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-form-item label="来电号码：">
                  <el-select v-model="value" placeholder="全部">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="受理时间：">
                  <!--时间控件-->
                  <el-date-picker v-model="value3" type="datetimerange" placeholder="选择时间范围">
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-button type="primary" class="queryBtn">查询</el-button>
                <el-button type="primary" class='resetBtn'>重置</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <!--查询-->
    </el-col>
  </el-row>
  <el-row class="tab_div">
    <div class="grid-content bg-purple_1">
      <el-row>
        <el-col :span="6">
          <div class="">
            <span>呼入工单列表</span>
          </div>
        </el-col>
        <el-col :span="14" :offset="2">
          <div class="export_div">
            <el-button type="primary" class='resetBtn' @click='dialogTableVisible=true'>工单详情</el-button>
            <!-- 弹出框-->
            <el-dialog title="工单详情" v-model="dialogTableVisible" size='large' top='40%' false>
              <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="客户信息" name="first">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="客户姓名" width="150"></el-table-column>
                    <el-table-column property="name" label="手机号1" width="200"></el-table-column>
                    <el-table-column property="address" label="手机号2"></el-table-column>
                    <el-table-column property="address" label="固定电话"></el-table-column>
                    <el-table-column property="address" label="VIP"></el-table-column>
                    <el-table-column property="address" label="性别"></el-table-column>
                    <el-table-column property="address" label="出生日期"></el-table-column>
                    <el-table-column property="address" label="年龄段"></el-table-column>
                    <el-table-column property="address" label="所在地"></el-table-column>
                    <el-table-column property="address" label="详细地址"></el-table-column>
                    <el-table-column property="address" label="建档时间"></el-table-column>
                    <el-table-column property="address" label="最后一次联系时间"></el-table-column>
                    <el-table-column property="address" label="累计来电次数"></el-table-column>
                    <el-table-column property="address" label="累计工单数"></el-table-column>
                    <el-table-column property="address" label="客户业务类型"></el-table-column>
                    <el-table-column property="address" label="客户彩种类型"></el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="工单信息" name="second">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="客户姓名"></el-table-column>
                    <el-table-column property="name" label="手机号1"></el-table-column>
                    <el-table-column property="address" label="手机号2"></el-table-column>
                    <el-table-column property="address" label="固定电话"></el-table-column>
                    <el-table-column property="address" label="VIP"></el-table-column>
                    <el-table-column property="address" label="性别"></el-table-column>
                    <el-table-column property="address" label="出生日期"></el-table-column>
                    <el-table-column property="address" label="年龄段"></el-table-column>
                    <el-table-column property="address" label="所在地"></el-table-column>
                    <el-table-column property="address" label="详细地址"></el-table-column>
                    <el-table-column property="address" label="建档时间"></el-table-column>
                    <el-table-column property="address" label="最后一次联系时间"></el-table-column>
                    <el-table-column property="address" label="累计来电次数"></el-table-column>
                    <el-table-column property="address" label="累计工单数"></el-table-column>
                    <el-table-column property="address" label="客户业务类型"></el-table-column>
                    <el-table-column property="address" label="客户彩种类型"></el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="处理记录" name="third">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="客户姓名"></el-table-column>
                    <el-table-column property="name" label="手机号1"></el-table-column>
                    <el-table-column property="address" label="手机号2"></el-table-column>
                    <el-table-column property="address" label="固定电话"></el-table-column>
                    <el-table-column property="address" label="VIP"></el-table-column>
                    <el-table-column property="address" label="性别"></el-table-column>
                    <el-table-column property="address" label="出生日期"></el-table-column>
                    <el-table-column property="address" label="年龄段"></el-table-column>
                    <el-table-column property="address" label="所在地"></el-table-column>
                    <el-table-column property="address" label="详细地址"></el-table-column>
                    <el-table-column property="address" label="建档时间"></el-table-column>
                    <el-table-column property="address" label="最后一次联系时间"></el-table-column>
                    <el-table-column property="address" label="累计来电次数"></el-table-column>
                    <el-table-column property="address" label="累计工单数"></el-table-column>
                    <el-table-column property="address" label="客户业务类型"></el-table-column>
                    <el-table-column property="address" label="客户彩种类型"></el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-dialog>
            <el-button type="primary" class='resetBtn' @click='dialogTableVisible1=true'>工单轨迹</el-button>
            <el-dialog title="工单轨迹" v-model="dialogTableVisible1" size='large'>
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="一致性 Consistency" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
              </el-collapse>
            </el-dialog>
            <el-button type="primary" class='resetBtn'>查看录音</el-button>
            <el-button type="primary" class='resetBtn'>下载录音</el-button>
            <el-button type="primary" class='resetBtn'>导出</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="tab_div">
        <!-- table表格 -->
        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="id" label="序号" :label-width="formLabelWidth">
          </el-table-column>
          <el-table-column prop="num" label="工单编号">
          </el-table-column>
          <el-table-column prop="phone" label="来电号码">
          </el-table-column>
          <el-table-column prop="addr1" label="归属省">
          </el-table-column>
          <el-table-column prop="addr2" label="归属市">
          </el-table-column>
          <el-table-column prop="name" label="业务名称">
          </el-table-column>
          <el-table-column prop="services" label="人工服务">
          </el-table-column>
          <el-table-column prop="ser_type" label="业务类型">
          </el-table-column>
          <el-table-column prop="work_type" label="工单类型">
          </el-table-column>
          <el-table-column prop="ticket_type" label="彩种类型">
          </el-table-column>
          <el-table-column prop="state" label="工单状态">
          </el-table-column>
          <el-table-column prop="timer" label="受理时间">
          </el-table-column>
          <el-table-column label="操作">
          </el-table-column>
        </el-table>
        <!-- table表格 -->
      </el-row>
    </div>
  </el-row>
  </div>
</template>
<style scoped>
.waitingTask{position:relative}
.bg-purple-dark_ {
  /*background: #99a9bf;*/
  border: 1px solid #cfcfcf;
  color: #000;
  overflow: hidden;
  padding: 20px 10px;
}

.bg-purple {
  /*background: #99a9bf;*/
  border: 0px solid #cfcfcf;
  color: #000;
}

.queryBtn {
  background: #22b7b5;
}

.resetBtn {
  background: #22b7b5;
}

.tab_div {
  margin-top: 20px;
}

.bg-purple_1 {
  background: #eeeeee;
  padding: 10px;
  text-align: left;
}

.export_div {
  text-align: right;
}

.tab_div {
  margin-top: 20px;
}

.export_div .el-dialog__title {
  float: left;
}
</style>
<script>
export default {
  data () {
    return {
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
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      tableData: [{
        id: '2016-05-03',
        num: '王小虎',
        phone: '上海市普陀区金沙江路 1518 弄',
        addr1: '',
        addr2: '',
        name: 'suxiaoyan',
        services: 'sss',
        ser_type: 'sss',
        work_type: 'sss',
        ticket_type: 'sss',
        state: 'sss',
        timer: '2017-02-03'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      formLabelWidth: '500px',
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible: false,
      activeName2: 'first',
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      activeNames: 1
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleChange () {
      // ss
    },
    open2 () {
      this.$confirm(this.activeName2, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
