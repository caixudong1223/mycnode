// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import * as timefilters from './util/timefilter'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

Vue.use(Element)

Object.keys(timefilters).forEach(k => Vue.filter(k, timefilters[k])) //注册过滤器

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


