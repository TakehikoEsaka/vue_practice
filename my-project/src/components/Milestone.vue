<template>
  <div id="milestones">
    <p v-if="errored" v-cloak>{{ error }}</p>
    <p v-if="loading" v-cloak>Loading...</p>
    <div v-else>
      <ul>
        <div v-for="_info in info" :key="_info.id">
          <h3>{{_info.title}}</h3>
          <Issue :project_id="project_id" 
                 :milestone_id="_info.id"
          />
        </div>

        <!-- 追加ボタン設置 -->
        <Addissue />

      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Issue from './Issue.vue'
import Addissue from "./Addissue.vue"

export default {
  name: 'Milestone',
  components: {
    Issue,
    Addissue
  },
  props: {
    project_id: Number
  },
  data () {
      return {
          info: null,
          loading: true,
          errored: false,
          error: null,
      }
  },
  created () {
    axios
    .get('https://gitlab.com/api/v4/projects/20502241/milestones', {
      "params" : {
        private_token: process.env.VUE_APP_GITLAB_PRIVATE_TOKEN,
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
#milestones {
  width: 100%;
}
</style>
