<template>

  <div class="container">
    <!-- bootstrap-vueはDOM要素として使えるので，その中にv-if記載可能 -->
    <!-- b-alertはv-ifとセットで使うもの -->
    <b-alert show variant="danger" v-if="errored" >{{ error }}</b-alert>

    <!-- v-cloakつけるとMustacheバインディング中に{{}}が表示されなくなる -->
    <!-- mustacheとは{{}}で区切られた変数部分を指す -->
    <!-- 定義されてないデータだとmustacheは無視してエラーださずに見る事ができる -->
    <b-alert show variant="info" v-if="loading" v-cloak >Loading from {{ api_url }} ...</b-alert>

    <!-- b-alertのv-elseはdiv要素でも何でも出来る -->
    <div v-else>
      <div v-for="_info in info" :key="_info.id"> <!-- v-ifは何基準でまとめるかv-bind:keyを設定する必要がある -->
        <h2>{{_info.id}} {{_info.name}}</h2>
        <!-- toggle : https://bootstrap-vue.org/docs/directives/toggle#toggle -->
            <b-button
              :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible">
              Toggle Collapse
            </b-button>
            <!-- visibleがtrueとfalseで見える/見えないをコントロール -->
            <!-- v-on:child-event="visible=true"は，子→親のイベントの受け渡しを子で$emit・親でv-onを使って実現している -->
            <!-- v-onで記述されるものをイベントリスナーと呼ぶ -->
            <!-- @がaddEventListnerと考えておけばOK -->
            <b-collapse id="collapse-4" v-model="visible" v-on:child-event="visible = true" class="mt-2">
              <b-card>
                <!-- 外側を押すと閉じるcomponent定義 -->
                <!-- https://qiita.com/huigo/items/a888dcee8f46d62bb9e3 -->
                <Milestone :project_id="_info.id"/> 
                <!-- v-vind:project_idは自分→子に受け渡す用に作ってる -->
              </b-card>
            </b-collapse>
      </div>

      <!-- カレンダー https://bootstrap-vue.org/docs/components/calendar#calendar -->
      <b-row>
        <b-col md="auto">
          <b-calendar v-model="value" locale="en-US"></b-calendar>
        </b-col>
        <b-col>
          <p>Value: <b>'{{ value }}'</b></p>
        </b-col>
      </b-row> 

    </div>
  </div>
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css' // vue-cliバージョンのbootstrapを使うには記載が必要
import axios from 'axios'
import Milestone from './Milestone.vue'

// Mixinについてhttps://jp.vuejs.org/v2/guide/mixins.html
import myFirstMixin from '../mixin/myFirstMixin'//ここでインポートする 
// import listener from '../mixin/eventlistener' // 次回このlistnerを使う(https://qiita.com/huigo/items/a888dcee8f46d62bb9e3)

export default {
  name: 'Projects',
  components: {
    Milestone
  },
  data () {
      return {
          api_url: 'https://gitlab.com/api/v4/users/2904302/projects',
          info: null,
          loading: true,
          errored: false,
          error: null,
          visible: true,
          value: '',
          context: null,
          showMilestone: true
      }
  },
  created () {
    // axios.defaults.withCredentials = true //これをつけると怒られてしまう
    axios
    .get(this.api_url, {
      "params" : {
        sort: "asc"
      }
    })
    .then(response => {
      // APIサーバーでresの部分が返ってくる. (mock.jsを参考にすると分かりやすい)
      // chromeのdev toolのconsole画面で確認出来る.
      console.log(response.headers) // resのheadersプロパティが返される
      console.log(response.data) // resのdataプロパティが返される
      console.log(response.status) // resのstatusプロパティが返される．正常なら200が返ってくる
      this.info = response.data
    })
    .catch(err => {
      this.errored = true, 
      this.error = err;
    })
    .finally(() => (this.loading = false))
  },
  mixins: [
    myFirstMixin
  ]
}
</script>

<!-- このcomponentだけに適用したいCSSがあればこのように記載する -->
<!-- vueごとにcssをimportする事も可能-->
<style scoped>
@import url("../../assets/index.css");
</style>