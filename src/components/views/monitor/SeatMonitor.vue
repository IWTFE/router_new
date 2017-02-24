<template>
  <div class="SeatMonitor">
    <el-button type="text" @click="dialogFormVisible = true">账户信息修改</el-button>
    <el-button type="text" @click="submitFormVisible = true">提交工单信息</el-button>
    <el-button type="text" @click="submitsuccessVisible = true">提交工单成功</el-button>
    <el-button type="text" @click="submitjifenVisible = true">积分卡信息</el-button>
    <el-button type="text" @click="submithandleVisible = true">工单处理</el-button>
    <el-button type="text" @click="submitguijiVisible = true">工单轨迹</el-button>
    <el-button type="text" @click="submitprocessVisible = true">业务处理</el-button>
    <el-dialog title="" v-model="dialogFormVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-modifyBox></v-modifyBox>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submitFormVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-submitBox></v-submitBox>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submitsuccessVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-submitBoxsuccess></v-submitBoxsuccess>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submitjifenVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-jifenInfo></v-jifenInfo>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submithandleVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-handle></v-handle>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submitguijiVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-guiji></v-guiji>
      </div>
    </el-dialog>
    <el-dialog title="" v-model="submitprocessVisible">
      <span class='boxline'></span>
      <div class="box">
        <v-processVisible></v-processVisible>
      </div>
    </el-dialog>
  </div>
</template>
<script>
   import modifyBox from 'src/components/login/modify_box.vue'
   import submitBox from 'src/components/login/submit_box.vue'
   import submitBoxsuccess from 'src/components/login/submit_success.vue'
   import jifenInfo from 'src/components/login/jifen_info.vue'
   import handle from 'src/components/login/handle.vue'
   import guiji from 'src/components/login/guiji.vue'
   import processVisible from 'src/components/login/process.vue'
   export default {
     data () {
       return {
         dialogFormVisible: false,
         submitFormVisible: false,
         submitsuccessVisible: false,
         submitjifenVisible: false,
         submithandleVisible: false,
         submitguijiVisible: false,
         submitprocessVisible: false
       }
     },
     components: {
       'v-modifyBox': modifyBox,
       'v-submitBox': submitBox,
       'v-submitBoxsuccess': submitBoxsuccess,
       'v-jifenInfo': jifenInfo,
       'v-handle': handle,
       'v-guiji': guiji,
       'v-processVisible': processVisible
     }
   }
</script>
<style>
.SeatMonitor{overflow:hidden;min-height:800px;}
.SeatMonitor .cancel{color:#fff;border-radius: 4px;background:#22b7b5;width:100px;}
.SeatMonitor .cancel:hover{color:#fff;border-radius: 4px;background:#22b7b5;width:100px;}
.SeatMonitor .fonfirm{color:#fff;border-radius: 4px;background:#22b7b5;}
.SeatMonitor .fonfirm:hover{color:#fff;border-radius: 4px;background:#22b7b5;}
.box{}
.boxline{display: inline-block;position: absolute;width:60px;height:100%;top:0;bottom:0;background-color:#22b7b5;left:0;}
</style>
