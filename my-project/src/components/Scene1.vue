<template>
  <div class="top-container">
    <h1>{{ msg }}</h1>
    <h2 v-show="showText">{{ text }}</h2>
    <button v-on:click="toggle">おしてね</button>
    <p>{{inputed_msg}}</p>
    <input type="text" v-model="inputed_msg">
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputed_msg: "data binding test",
      text: "Hi TAKE",
      showText: false
    }
  },
  methods: {
      toggle: function() { //関数名がtoggle
        this.showText = !this.showText //dataで定義したプロパティの取得はthisで行う
        // vueでのthisとアロー関数でのthisの意味合いはことなってくる．アロー関数は使わないほうがいいみたい．
      }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>