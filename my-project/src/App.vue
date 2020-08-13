// ここにhtmlを記載
// 本で言う所のvue.jsコンテナに対応
<template>
  <div id="app">
    <myheader></myheader>
    <img alt="Vue logo" src="./assets/logo.png">
    <Scene1 />
  </div>
</template>

// ここにjavascriptを記載
// 本で言う所のコンテナのテンプレートに対応
<script>
import Scene1 from './components/Scene1.vue'
import myheader from './components/myheader.vue'

export default {
  name: 'App', // コンポーネントにも名前がつけれる.exportはこれでするのでimportする時は合わせる必要あり
  components: {
    Scene1,
    myheader
  }
}
</script>

// ここにcssを記載
// vueごとにcssを管理出来る(コンポーネントスコープCSS)から便利
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
</style>