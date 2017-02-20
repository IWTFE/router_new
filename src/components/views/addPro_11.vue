<template>
<div class="addDiv">
  <div>{{ gettabs }} - {{count}} - {{sessionCount}}</div>
  <button @click="addcount_({a:1})"> + </button>
  <button @click="addTabs_"> + </button>
  <button @click="plusTabs_"> - </button>
  <router-view></router-view>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      sessionCount: window.sessionStorage.getItem('obj'),
      sessionMenus: null,
      sMenusArr: []
    }
  },
  computed: {
    ...mapGetters([
      'gettabs',
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'addcount_',
      'addTabs_',
      'plusTabs_'
    ])

  },
  created () {
    //
  },
  watch: {
    $route (to, from) {

    }
  }
}
</script>
<style>
.addDiv {
  padding: 0 20px 0 20px;
}

.navMenus {
  margin: 0;
  padding: 0;
}

.navMenus .el-breadcrumb {
  margin: 0;
  padding: 20px 0 0 2px;
  color: #ccc;
}

.navMenus .el-breadcrumb__item:last-child .el-breadcrumb__item__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover {
  color: #ccc;
  cursor: text;
}

.tabs {
  padding: 20px 0;
}

.tabpane_ {
  border: 1px solid red;
}

.el-tabs--card>.el-tabs__header>.el-tabs__item.is-active {
  border: 1px solid #d1dbe5;
  border-radius: 4px 4px 0 0;
  color: #fff;
  width: 136px;
  background: #22b7b5;
  text-align: center
}

.el-tabs__item {
  height: 36px;
  box-sizing: border-box;
  border-bottom: 1px solid #8391a5;
  line-height: 36px;
  float: left;
  list-style: none;
  font-size: 14px;
  color: #8391a5;
  margin-bottom: -1px;
  position: relative;
}

.addDiv .el-tag {
  float: left;
  background-color: #22b7b5;
  display: inline-block;
  padding: 0 12px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #fff;
  border-radius: 5px 5px 0px 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  white-space: nowrap;
  margin-top: 20px;
  margin-right: 2px;
  color: #fff;
}

.addDiv .el-tag a {
  cursor: pointer;
}

.addDiv .active {
  color: ccc;
}

.el-dialog__title {
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #1f2d3d;
  text-align: left;
}
</style>
