<template>
  <div class="main">
    <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <div class="home_list_title"></div>
        <ul class="ul_list">
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
          <li>
            <a href="javascript:;"><span>福彩热线</span><span>全国福利彩票活动玩法增加双色球,知识库内容已更新...</span><span>2014-12-03</span></a>
          </li>
        </ul>
      </div>
    </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
         <div class="home_list_title"></div>
         <ul class="ul_list">
           <li>
             <a href="javascript:;"><span>今天</span><span>1个</span></a>
           </li>
           <li>
             <a href="javascript:;"><span>本周</span><span>1个</span></a>
           </li>
           <li>
             <a href="javascript:;"><span>本月</span><span>1个</span></a>
           </li>
         </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
         <div class="home_list_title"></div>
         <ul class="ul_list">
           <li>
             <a href="javascript:;"><span>待处理工单</span><span>1个</span></a>
           </li>
         </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="home_list_title"></div>
          <ul class="ul_list">
            <li>
              <a href="javascript:;"><span>新增知识库</span></a>
            </li>
                <ul class="ul_list_sub">
                  <li>
                    <a href="javascript:;"><span>本日新增</span><span>5个</span></a>
                  </li>
                  <li>
                    <a href="javascript:;"><span>本周新增</span><span>5个</span></a>
                  </li>
                  <li>
                    <a href="javascript:;"><span>本月新增</span><span>5个</span></a>
                  </li>
                </ul>
            <li>
              <a href="javascript:;"><span>新增知识库</span></a>
            </li>
                <ul class="ul_list_sub">
                  <li>
                    <a href="javascript:;"><span>本日新增</span><span>5个</span></a>
                  </li>
                  <li>
                    <a href="javascript:;"><span>本周新增</span><span>5个</span></a>
                  </li>
                  <li>
                    <a href="javascript:;"><span>本月新增</span><span>5个</span></a>
                  </li>
                </ul>
          </ul>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.main{padding:10px;}
.el-row{margin-top:20px;}
 .el-col {
   border-radius: 4px;
 }
 .bg-purple-dark {
   background: #fff;
   border:0px solid #cfcfcf;
 }
 .bg-purple {
   background: #fff;
   border:0px solid #cfcfcf;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 36px;
 }
 .row-bg {
   padding: 10px 0;
   background-color: #f9fafc;
 }
 .home_list_title{height:35px;width:100%;background:#22b7b5;border-radius: 4px 4px 0 0;}
 .ul_list{border:1px solid #cfcfcf;margin:0;padding:0;border-top:0;list-style-type:none;padding:10px;text-align: left;}
 .ul_list li{padding:3px 0;}
 .ul_list li a{text-decoration: none;}
  .ul_list li a:hover{text-decoration:underline;color:#ccc;}
 .ul_list li span{padding:0 10px;color: #666666}

 .ul_list_sub{margin:0;padding:0;border-top:0;list-style-type:none;padding:0 10px;text-align: left;}
 .ul_list_sub li{padding:3px 0;}
 .ul_list_sub li a{text-decoration: none;}
  .ul_list_sub li a:hover{text-decoration:underline;color:#ccc;}
 .ul_list_sub li span{padding:0 10px;color: #666666}

</style>
