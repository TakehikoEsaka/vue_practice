import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

// 以下でindex.htmlのid="app"にAppという名前でコンポーネントをマウント
// 本で言う所のvueオブジェクト作成に対応する
new Vue({
  render: h => h(App),
}).$mount('#app_html_id')