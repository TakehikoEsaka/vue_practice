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

// local storageの実装インポートする  
// https://qrunch.net/@popy1017/entries/ao2FnOJ0EY8gr3ge?ref=qrunch
import Storage from "vue-ls";  
const options = {  
  // ローカルストレージに保存する際、キーの頭に指定した文字列が付与される  
  namespace: "vuejs__", // key prefix   
  // インスタンスプロパティに追加する名前。lsとしたら、Vue.ls, this.$ls でアクセスできるようになる  
  name: "ls", // name variable Vue.[ls] or this.[$ls],  
  storage: "local", // storage name session, local, memory  
};  
// useを使ってプラグインを導入。上で定義した設定オブジェクトも一緒に渡す。  
Vue.use(Storage, options);   
Vue.config.productionTip = false;

// 以下でindex.htmlのid="app"にAppという名前でコンポーネントをマウント
// 本で言う所のvueオブジェクト作成に対応する
new Vue({
  render: h => h(App),
}).$mount('#app_html_id')