<template>
  <div>
    <p v-if="errored" v-cloak>{{ error }}</p>
    <p v-if="loading" v-cloak>Loading...</p>
    <div v-else>
        <table class="issue_table">
            <thead>
            <tr>
                <th class="id">id</th>
                <th class="title">title</th>
                <th class="state">state</th>
                <th class="start">start</th>
                <th class="due_date">due_date</th>
                <th class="assignee">assignee</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="_info in info" v-bind:key="_info.id">
                <td> #{{ _info.id }} </td>
                <td> {{ _info.title }} </td>
                <td v-if="_info.state=='closed'"> &#x2714; </td>
                <td v-else> </td>
                <td> {{ _info.start_date }} </td>
                <td> {{ _info.due_date }} </td>
                <td v-if="_info.assignees.length > 0">{{ _info.assignees[0].name }}</td>
            </tr>
            </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Issue',
  props: {
    project_id: Number,
    milestone_id: Number,
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
    .get('https://gitlab.com/api/v4/projects/20502241/milestones/1406174/issues', {
      "params" : {
        private_token: process.env.VUE_APP_GITLAB_PRIVATE_TOKEN
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
h4 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
table {
  table-layout: fixed;
  width: 60%;
}
.title {
  width: 60%;
}
.id, .state{
  width: 5%;
}
td {
  text-align: center;
}
</style>
