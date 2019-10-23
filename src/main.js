import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VeeValidate from 'vee-validate';

import '@/assets/global.scss'

Vue.use(VeeValidate);

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
