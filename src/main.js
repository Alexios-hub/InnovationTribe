import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/ant-design-vue.js'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI)


Vue.use(ElementUI, { locale })


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
