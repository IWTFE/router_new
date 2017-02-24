import Vue from 'vue'
import Router from 'vue-router'

// 加载所有的文件
import Login from 'components/login.vue'
import home from 'components/home.vue'
import waitingTask from 'components/views/waitingTask.vue'
import welcome from 'components/views/welcome.vue'
import seatMonitor from 'components/views/monitor/SeatMonitor.vue'
import callin from 'components/views/query/callin.vue'
import recallout from 'components/views/report/recallout.vue'
import addpro from 'components/views/addPro.vue'
import neworder from 'components/views/neworder/new_older.vue'
import error from 'components/views/error.vue'
import home_1 from 'components/home_1.vue'
import custom_manager from 'components/custom_manager.vue'

// 懒加载的方式
// const Login = r => require.ensure([], () => r(require('components/login.vue')), 'group-foo')
// const home = r => require.ensure([], () => r(require('components/home.vue')), 'group-foo')
// const home_1 = r => require.ensure([], () => r(require('components/home_1.vue')), 'group-foo')
// const waitingTask = r => require.ensure([], () => r(require('components/views/waitingTask.vue')), 'group-foo')
// const welcome = r => require.ensure([], () => r(require('components/views/welcome.vue')), 'group-foo')
// const seatMonitor = r => require.ensure([], () => r(require('components/views/monitor/SeatMonitor.vue')), 'group-foo')
// const callin = r => require.ensure([], () => r(require('components/views/query/callin.vue')), 'group-foo')
// const recallout = r => require.ensure([], () => r(require('components/views/report/recallout.vue')), 'group-foo')
// const addpro = r => require.ensure([], () => r(require('components/views/addPro.vue')), 'group-foo')
// const neworder = r => require.ensure([], () => r(require('components/views/neworder/new_older.vue')), 'group-foo')
// const error = r => require.ensure([], () => r(require('components/views/error.vue')), 'group-foo')
// const custom_manager = r => require.ensure([], () => r(require('components/custom_manager.vue')), 'group-foo')

Vue.use(Router)
import { mapState } from 'vuex'
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/login', name: 'Login', component: Login},
    {path: '/home',component: home, name:'home', children: [
      {path: '/welcome', name: 'welcome', component:welcome},
      {path: '/main', name: 'home_1', component:home_1},
      {path: '/addpro',component: addpro,children:[
        {path: '/addpro/waitingTask', name: 'waitingTask', component:waitingTask},
        {path: '/addpro/seatMonitor', name: 'seatMonitor', component: seatMonitor},
        {path: '/addpro/callin', name: 'callout', component: callin},
        {path: '/addpro/recallout', name: 'recallout', component: recallout},
        {path: '/addpro/neworder', name: 'neworder', component: neworder},
        {path: '/addpro/custom_manager', name: 'custom_manager', component: custom_manager},

      ]}
    ]},
    {path:'*',component: home, children: [
        {path: '*', name: 'error', component:error}
    ] }
  ]
})
export default router
