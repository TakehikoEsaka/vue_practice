import Vue from 'vue'
import App from './App.vue'

// 以下はbootstrapを使うための書式
import moment from 'vue-moment'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(moment)
Vue.use(BootstrapVue)

// Vue.config.productionTip = false

// 以下でindex.htmlのid="app"にAppという名前でコンポーネントをマウント
// 本で言う所のvueオブジェクト作成に対応する
new Vue({
  render: h => h(App),
}).$mount('#app_html_id')