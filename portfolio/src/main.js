import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueFriendlyIframe from 'vue-friendly-iframe';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueFriendlyIframe);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
