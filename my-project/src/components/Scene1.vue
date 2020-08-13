<template>
  <div class="top-container">
    <h1>{{ msg }}</h1>
    <h2 v-show="showText">{{ text }}</h2>
    
    <!-- トグルの実装 -->
    <button v-on:click="toggle">おしてね</button>
    
    <!-- データバインディング用 -->
    <!-- 属性内では{{}}を使わなくても変数を参照出来る -->
    <p v-if="inputed_msg.length > 0">
    {{inputed_msg}}
    </p>
    <p v-else>
      no-text
    </p>
    <input type="text" v-model="inputed_msg">
    <button @click="clear()">clear</button>

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
      },
      clear() {
        this.inputed_msg = ""
      }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
} 
</style>