import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 数据控制中心
const state = {
  count: 0,
  tabs: []
}
const mutations = {
  // 给数据中心一个加函数
  add (state, obj) {
    // state.count ++
    // sessionStorage.setItem('num', state.count)
    // 添加一个tab
    state.tabs.push(obj)
  },
    // 删除一个tab
  plus (state, tag) {
    state.tabs.splice(state.tabs.indexOf(tag), 1)
  }
}
// 出口
const getters = {
  getTabs: (state, getters) => {
    return getters.tabs
  }
}

const actions = {
  tabs (context) {
    context.commit('add')
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
