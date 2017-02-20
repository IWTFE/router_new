<!--列表-->
<template>
  <div class="inline-display">
    <el-button v-on:click="excel">导出</el-button>
    <div v-show="isExport">
      <table :id="tableId">
        <tr v-for="(tr, index) in list">
          <td v-if="index === 0" v-for="td in tr.title">{{td}}</td>
          <td v-if="index !=0" v-for="td in tr">{{td}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  import expTool from './export.js'
  export default{
    created: function(){
      var list = this.listData.concat();
      list.unshift(this.listTitle);
      this.list = list;
    },
    data: function(){
      return {
        isExport: false,
        list: [],
        tableId: "exportExcel"
      }
    },
    props: ['listData','listTitle'],
    methods: {
      excel: function(){
        expTool.getExcel(this.tableId);
      }
    }
  }
</script>
<style media="screen">
  .inline-display{display: inline-block}
</style>
