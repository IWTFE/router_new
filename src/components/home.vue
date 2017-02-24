<template>
   <div>
     <v-header></v-header>
     <div class="navMenus">
     </div>
     <el-col :span="3"><div class="app-sidebar"><v-sildbar></v-sildbar></div></el-col>
     <el-col :span="24">
       <div class="app-main" >
         <div class="app-main-inner">
         <v-content></v-content>
         </div>
       </div>
     </el-col>
   </div>
</template>
<script>
   import header from 'components/head.vue'
   import sidlebar from 'components/sidlebar'
   import content from 'components/content'
   export default {
     data () {
       return {

       }
     },
     components: {
       'v-header': header,
       'v-sildbar': sidlebar,
       'v-content': content
     }
   }
</script>
<style scoped>
.app-sidebar {
    position: fixed;
    top:65px;
    left: 0;
    bottom: 0;
    padding: 0px 0 50px;
    width: 200px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1023;
    background: #32323a;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
}
.app-main {
    margin-left: 200px;
    transform: translateZ(0);
    /*border:1px solid red;*/
}
</style>
