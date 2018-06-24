import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import OrSeparator from './components/OrSeparator'

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.component('app-or-separator', OrSeparator);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
