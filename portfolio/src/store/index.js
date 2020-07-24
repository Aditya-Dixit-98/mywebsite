import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/fb.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    loading:false,
    overlay:false,
  },
  mutations: {
    send(state,payload){
      state.data=[]
      state.loading=true
      console.log("this is payload",payload)
      state.data.push(payload)
      console.log("this is data",state.data)
      db.ref().push(payload).then(data =>{
        data=[]
        state.overlay = true
      }).catch(error =>{
        console.log(error)
      })

    }
  },
  actions: {
    send(context,payload){
      console.log("this is payload",payload)
      context.commit('send',payload)
    }
  },
  modules: {
  }
})
