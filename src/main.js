// basic
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'
import 'lib-flexible'
//add
import iView from 'iview';

//css
import 'iview/dist/styles/iview.css';
import '../static/css/simditor.css';
import '../static/css/m.css';

//js

//add
Vue.use(iView)
Vue.prototype.$api = api


//basic
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


