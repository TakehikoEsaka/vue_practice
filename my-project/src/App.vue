// htmlを記載(本で言う所のvue.jsコンテナに対応)
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- チュートリアル -->
    <Todo />
    
    <!-- 開発用 -->
    <Projects />

  </div>
</template>

// javascriptを記載(本で言う所のコンテナのテンプレートに対応)
<script>
import Todo from "./components/tutorial/Todo.vue"
import Projects from './components/software_meeting/Projects.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Projects,
  }
}
</script>

<!-- app全体に対して定義するcssは以下のように書く-->
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