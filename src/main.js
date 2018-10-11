// basic
import Vue from 'vue'
import App from './App'
import router from './router'

//add
import iView from 'iview';

//css
import 'iview/dist/styles/iview.css';
import '../static/css/simditor.css';


//js

//add
Vue.use(iView)

//basic
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


