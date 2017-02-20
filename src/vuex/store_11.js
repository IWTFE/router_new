import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 数据控制中心

const state = {
  count: 0,
  tabs: [],
  countArr: [],
  json: {}
}
const mutations = {
  addcount (state, obj) {
    // console.log(obj)
    state.count++
    window.sessionStorage.setItem('count', state.count) // 每增加一个都记录在sessionStorage
    // state.countArr.push(obj)
    if (window.sessionStorage.getItem('obj') === null) {
      return
    } else {
      state.countArr = JSON.parse(window.sessionStorage.getItem('obj'))
    }
    state.countArr.push(obj)
    window.sessionStorage.setItem('obj', JSON.stringify(state.countArr))
  },
  addTabs (state) {
    state.tabs.push(state.count++)
    // window.sessionStorage.setItem('obj', JSON.stringify(state.tabs))
  },
  plusTabs (state) {
    state.tabs.pop()
    // window.sessionStorage.setItem('obj', JSON.stringify(state.tabs))
  }
}
const getters = {
  count: state => {
    return state.count
  },
  gettabs: state => {
    return state.tabs
  }
}
const actions = {
  addcount_ (context, obj) {
    context.commit('addcount', obj)
  },
  addTabs_ (context) {
    context.commit('addTabs')
  },
  plusTabs_ (context) {
    context.commit('plusTabs')
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
