<template>
  <!-- 参考：https://bootstrap-vue.org/docs/components/form -->
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="New Issue" label-for="new-issue">

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

      <b-button type="submit" variant="primary">登録</b-button>
      <b-button type="reset" variant="danger">リセット</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
    name: "Addissue",
    data() {
      return {
        form: {
          title: "",
          start: "",
          due_date: "",
          asignee: "",
          status: null,
        },
        status_list: [{ text: 'Status', value: null }, //textで指定した部分がdefaultで表示される
                'Todo', 'Doing', 'Done'], // 選択肢をここに表示
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.start = ''
        this.form.due_date = ''
        this.form.state = null
        this.form.asignee = ''
        // Trick to reset/clear native browser form validation state
        // ★以下の部分は何をしているのか？？
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script> 