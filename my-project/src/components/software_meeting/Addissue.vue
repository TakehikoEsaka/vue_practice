<template>
  <!-- 参考：https://bootstrap-vue.org/docs/components/form -->
  <div>
    <b-card title="Added Issues">
      <b-card-text>
      <!--v-forは(datum, index)とするとindexが取れる -->
      <!-- liの中にv-forを書くパターンと外に書いてしまうパターンの2通り存在する-->
      <!-- liは箇条書き
      <li v-for="(form, index) in forms" v-bind:key="index">
        {{form.start}}  {{form.due_date}}  {{form.asignee}}  {{form.status}}
      </li>
      -->

      <!-- tableは表 https://neco913.kirara.st/post-12827/ -->
      <table class="vue_tbl">
        <thead>
          <tr>
            <th>Start</th>
            <th>Due Date<span style="font-size: 12px"></span></th>
            <th>Asignee<span style="font-size: 12px"></span></th>
            <th>status<span style="font-size: 12px"></span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(form, index) in forms" v-bind:key="index">
            <td>{{ form.start }}</td>
            <td>{{ form.due_date }}</td>
            <td>{{ form.asignee }}</td>
            <td>{{ form.status }}</td>
          </tr>
        </tbody>
      </table>

      </b-card-text>

      <!-- HTMLへのリンクの挿入はaとhref属性を使って行う -->
      <a href="#" class="card-link">Gitlab link</a>
    </b-card>

    <!-- https://bootstrap-vue.org/docs/components/form/#form -->
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- https://bootstrap-vue.org/docs/components/form-group-->
      <b-form-group id="input-group-1" label="New Issue" label-for="new-issue">
        <!-- https://bootstrap-vue.org/docs/components/form-input -->
        <b-form-input id="new-issue"
          v-model="form.title"
          required
          placeholder="Title"
        ></b-form-input>

        <b-form-input
          id="new-issue"
          v-model="form.start"
          required
          placeholder="Start"
        ></b-form-input>
        
        <b-form-input
          id="new-issue"
          v-model="form.due_date"
          placeholder="due_date"
        ></b-form-input>

        <b-form-input
          id="new-issue"
          v-model="form.asignee"
          placeholder="asignee"
        ></b-form-input>

        <b-form-select
          id="new-issue"
          v-model="form.status"
          :options="status_list"
        ></b-form-select>

      </b-form-group>

      <!-- https://bootstrap-vue.org/docs/components/button -->
      <b-button type="submit" variant="primary">登録</b-button>
      <b-button type="reset" variant="danger">リセット</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: "Addissue",
    data() {
      return {
        forms: [],
        form: {
          title: "",
          start: "",
          due_date: "",
          asignee: "",
          status: null,
        },
        status_list: [{ text: 'Status', value: null }, //textで指定した部分がdefaultで表示される
                'Todo', 
                'Doing',
                'Done',
                ], // 選択肢をここに表示
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault() //これは何してる？？
        alert(JSON.stringify(this.form)) // alertほしい時はこれを入れる
        const form = this.form //変数をmethod内で定義して渡す事も出来る．
        this.forms.push(form) //空配列にdataを追加するにはpushを使う
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.title = ''
        this.form.start = ''
        this.form.due_date = ''
        this.form.state = null
        this.form.asignee = ''
        this.show = false
        // ★以下の部分は何をしているのか？？
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script> 