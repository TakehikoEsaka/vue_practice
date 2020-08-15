// ここにhtmlを記載
// 本で言う所のvue.jsコンテナに対応
<template>
	<section id="app" class="todoapp">
		<header class="header">
			<h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off" 
            placeholder="What needs to be done?" v-model = "todo.title"> 
            <!-- v-modelを使う事で下のtodo.titleが初期値で与えられて，
            下のinpuで書かれた所で上書きされる．データバインディング-->
		</header>
		<section class="main">
			<ul class="todo-list">
				<li class="todo">
					<div class="view">
                        <input type="checkbox" class="toggle">
						<label>{{todo.title}}</label> <!-- このlabelは上のinputに対応している -->
					</div>
				</li>
			</ul>
		</section>
	</section>
</template>

// ここにjavascriptを記載
// 本で言う所のコンテナのテンプレートに対応
<script>

export default {
    name: "Edits", // コンポーネントにも名前がつけれる.exportはこれでするのでimportする時は合わせる必要あり
    data() { // dataという名前の関数
        return {
            todo: {
                id: 0,
                title: 'test todo',
                completed: false
            }
        }
    }
}
</script>

// ここにcssを記載
// vueごとにcssを管理出来る(コンポーネントスコープCSS)から便利
<style>
@import url("../assets/index.css");
</style>