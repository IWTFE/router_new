<template>
<div class="addDiv">
  <el-row>
    <el-tag v-for="tag in $store.state.tabs" :closable="true" :close-transition="false" @close="handleClose(tag)" :class='{active:active}'>
      <a @click='goto(tag.path)'>{{tag.title}}</a>
    </el-tag>
  </el-row>
  <router-view></router-view>
</div>
</template>
<script>
import {
 mapActions
} from 'vuex'

export default {
  data () {
    return {
      'title': this.$route.query.id,
      'name': this.$route.query.name,
      'tabs': [],
      'post': null,
      'activeName': 'second',
      'page_': {
        path: 'welcome_su',
        to: '/addpro/welcome',
        from: '/'
      },
      'active': true,
      'abc': sessionStorage.tabs
    }
  },
  mounted () {
    // ss
    if (this.$store.state.tabs.length === 0) {
      // console.log(this.abc)
    }
  },
  methods: {
    ...mapActions({
      'add': 'add'
    }),
    goto (path) {
      // alert(path)
      this.$router.push({
        path: path
      })
    },
    handleClose (tag) {
      // 如果唯一的话,不能删除
      if (this.$store.state.tabs.length === 1) {
        this.$router.push({
          path: '/welcome?id=1&name=欢迎页'
        })
      } else if (this.$store.state.tabs[this.$store.state.tabs.length - 1].path !== tag.path) {
        this.$store.commit('plus', tag)
        // this.$router.push({
        //   path: tag.path
        // })
      } else {
        this.$store.commit('plus', tag)
        this.$router.push({
          path: this.$store.state.tabs[this.$store.state.tabs.length - 1].path
        })
      }
    },
    getpath (to, from) {
      // console.log(to)
    }
  },
  watch: {
    $route (to, from) {
      // console.log(abc)
      // console.log(this.page)

      this.page_.to = to.path
      this.page_.from = from.fullPath

      // 逻辑
      let onoff = false
      this.$store.state.tabs.forEach((val, index) => {
        if (this.$route.fullPath === val.path) {
          onoff = true
        }
      })
      this.activeName = this.$route.name
      if (onoff) {
        // alert('same')
        this.active = true
        return
      } else {
        this.$store.commit('add', {
          title: this.$route.name,
          name: this.$route.name,
          path: this.$route.fullPath
        })
      }
      // router.push(this.$route.path)
    }
  }
}
</script>
<style>
.addDiv {margin:0;padding:0 20px;}
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
