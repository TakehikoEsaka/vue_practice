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
    <button @click="clear_inputed_msg()">clear</button>
    
    <!-- WebAPI利用例 -->
    <p>郵便番号 10504の都市は</p>
    <p>{{postcode}}</p>

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
      showText: false,
      postcode: ""
    }
  },
  methods: {
      toggle: function() { //関数名がtoggle
        this.showText = !this.showText //dataで定義したプロパティの取得はthisで行う
        // vueでのthisとアロー関数でのthisの意味合いはことなってくる．アロー関数は使わないほうがいいみたい．
      },
      clear_inputed_msg() {
        this.inputed_msg = ""
      }
  },
  created () {
    fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
    .then( response => {
      return response.json()
    })
    .then( json => {
      this.postcode = json.postalcodes[0].adminName1
    })
    .catch( (err) => {
      this.psotcode = err // エラー処理
    });
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
} 
</style>