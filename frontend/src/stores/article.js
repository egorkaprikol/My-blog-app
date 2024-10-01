import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

