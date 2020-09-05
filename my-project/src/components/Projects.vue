<template>

  <div class="container">
    <!-- bootstrap-vueはDOM要素として使えるので，その中にv-if記載可能 -->
    <b-alert show variant="danger" v-if="errored" >{{ error }}</b-alert>

    <!-- v-cloakつけると※Mustache バインディング中に{{}}が表示されなくなる -->
    <!-- 定義されてないデータだとmustacheは無視してエラーださずに見る事ができる -->
    <b-alert show variant="info" v-if="loading" v-cloak >Loading from {{ api_url }} ...</b-alert>

    <div v-else>
      <div v-for="_info in info" :key="_info.id">
        <h2>{{_info.id}} {{_info.name}}</h2>
        <!-- 以下がcollapseの部分 -->
            <b-button
              :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible">
              Toggle Collapse
            </b-button>
            <b-collapse id="collapse-4" v-model="visible" class="mt-2">
              <b-card>
                <Milestone :project_id="_info.id"/>
              </b-card>
            </b-collapse>
      </div>
      <!-- 以下がカレンダーの部分 -->
      <b-row>
        <b-col md="auto">
          <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
        </b-col>
        <b-col>
          <p>Value: <b>'{{ value }}'</b></p>
          <p class="mb-0">Context:</p>
          <pre class="small">{{ context }}</pre>
        </b-col>
      </b-row>      

    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

import axios from 'axios'
import Milestone from './Milestone.vue'

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
      }
  },
  methods : {
    onContext(ctx) {
      this.content = ctx
    }
  },
  created () {
    // axios.defaults.withCredentials = true //これをつけると怒られてしまう
    axios
    .get(this.api_url, { // dataから参照する時はthis.hogeでアクセス
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  text-align: -webkit-center;
  width: 100%;
}
.btn btn-primary {
	position: absolute;
	z-index: 100;
}
</style>
