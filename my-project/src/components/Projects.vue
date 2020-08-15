<template>
  <div class="container">
    <p v-if="errored" v-cloak>{{ error }}</p>
    <p v-if="loading" v-cloak>Loading...</p>

    <div v-else>
      <div v-for="_info in info" :key="_info.id">
        <h2>{{_info.id}} {{_info.name}}</h2>
        <Milestone :project_id="_info.id"/>
    </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Milestone from './Milestone.vue'

export default {
  name: 'Projects',
  components: {
    Milestone
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
    // axios.defaults.withCredentials = true //これをつけると怒られてしまう
    axios
    .get('https://gitlab.com/api/v4/users/2904302/projects', {
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
</style>
