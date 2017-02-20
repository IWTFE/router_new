<template>
   <div>
     <div class="header">
       <div class="time">
         <p>{{state}}</p>
          <p>{{time}}</p>
       </div>
       <ul class='callMenu'>
         <li v-for='(item,index) in menus' :class={activeClass:item.activate}><p :class=item.icon></p><a href='javascript:;'>{{item.btnStutes}}</a></li>
       </ul>
       <div class="user">
         <v-user></v-user>
       </div>
     </div>
   </div>
</template>
<script>
   import user from 'components/user.vue'
   export default {
     data () {
       return {
         'time': '00:00',
         'state': '未登录',
         'menus': [
                  {btnStutes: '示闲', activate: true, icon: 'icon-set'},
                  {btnStutes: '示忙', activate: false, icon: 'icon-busy'},
                  {btnStutes: '呼出', activate: true, icon: 'icon-callout'},
                  {btnStutes: '应答', activate: false, icon: 'icon-call'},
                  {btnStutes: '挂断', activate: false, icon: 'icon-holdon'},
                  {btnStutes: '咨询', activate: false, icon: 'icon-com'},
                  {btnStutes: '会议', activate: false, icon: 'icon-conform'},
                  {btnStutes: '保持', activate: false, icon: 'icon-baochi'},
                  {btnStutes: '接回', activate: false, icon: 'icon-callback'},
                  {btnStutes: '转出', activate: false, icon: 'icon-callout'}
                  // {btnStutes: '转移', activate: false, icon: ''},
                  // {btnStutes: '再拨', activate: false, icon: ''},
                  // {btnStutes: '桥接', activate: false, icon: ''},
                  // {btnStutes: '设置', activate: false, icon: ''},
                  // {btnStutes: '强复位', activate: false, icon: ''}
         ]
       }
     },
     components: {
       'v-user': user
     }
   }
</script>
<style scoped>
  .header {height: 65px;background:url('../../src/images/line.png') repeat-x;overflow:hidden;position: fixed;width:100%;z-index:9999;}
  .time {float: left;width:148px;height: 65px;background:url('../../src/images/timer.jpg') no-repeat}
  p{margin:0;padding:0;text-align:right;padding:5px 20px}
  .callMenu{float:left;margin:0;padding:0;list-style-type: none;overflow:hidden;}
  .callMenu li{float:left;color:#ccc;}
  .callMenu li a{font-size: 16px;color:#ccc;text-decoration:none;}
  .callMenu li p{font-size:28px;}
  .callMenu li.activeClass p{color:#24b6b3}
  .callMenu li.activeClass a{color:#333333}
  .errorClass{color:green}
  .user{float:right;padding:0 12px 0 0;}
</style>
