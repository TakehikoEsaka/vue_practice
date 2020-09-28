<template>
    <div>
        <table>
            <!-- todo:local storageを使う方法を考えるー -->
            <thead>
            <tr v-for="item in todos" v-bind:key="item.id">
                <th class="id">{{ item.id }}</th>
                <th class="comment">{{ item.comment }}</th>
                <th class="state">状態
                    <button>{{ item.state }}</button>
                </th>
                <th class="button">削除</th>
            </tr>
            </thead>
        </table>

        <h2>新しい作業の追加</h2>
        <form class="add-form" v-on:submit.prevent="doAdd"> <!-- preventはイベントのメソッドの種類で親と子の伝搬を避ける -->
            コメント <input type="text" ref="comment"> <!-- refを使うと対象のtagに直接アクセス出来る. この場合はthis.$refs.comment.valueで取れる -->
            <button type="submit">追加</button>
        </form>

        <button @click="num++">add input field</button>
        <p>input field</p>
        <ul>
        <li v-for="(key, index) in lists" :key="`input${index}`">
        <!-- 修飾子をつける事でtabだけ押している時やshift+tabの時が記述出来る -->
        <!-- https://jp.vuejs.org/v2/guide/events.html#exact-%E4%BF%AE%E9%A3%BE%E5%AD%90 -->
            <input type="text"
                class="input-items"
                @keydown.prevent.tab.exact="moveNext"
                @keydown.prevent.shift.tab="movePrev"
                @keydown.prevent.down="moveNext"
                @keydown.prevent.up="movePrev">
            <button>button</button>
        </li>
        </ul>

    </div>
</template>

<script>
// import todoStorage from "../../main" //jsファイルから変数を読み込む時は.js拡張子はいらない
export default {
  name: 'Todo', 
  data() {
        return {
            id : 0,
            todos: [],
            num : 3
        }
  },
  computed: {
      lists() {
        // 配列操作Arrayに関して. https://www.sejuku.net/blog/31746
        console.log(Array.from(Array(this.num).keys()));
        return Array.from(Array(this.num).keys())
      },
      elements () {
          return document.getElementsByClassName("input-items") //これでinput-itemsとclass名で指定したものがリストに入れれる
      }
  },
  methods: {
    doAdd : function() {
        var comment = this.$refs.comment
        if (!comment.value.length) { // 文字入力されたかどうかを取る方法
            return
        }
        this.todos.push({
            id : this.id++,
            comment : comment.value,
            state: 0
        })
        comment.value=""
        console.clear(); // consoleのlogを消す
        // this.$ls.set(this.todos)
    },
    findIndex (target) {
        console.log("this.elements");
        console.log(this.elements);
        // findIndex関数は指定したエレメントのidを返してくれる
        // アロー関数を使っている．eはelementの事
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        const index = [].findIndex.call(this.elements, e => e === target)
        console.log("index");
        console.log(index)
        return index
    },
    moveFocus (index) {
        if (this.elements[index]) {
            this.elements[index].focus() //.focus()でフォーカス当てる部分を移動出来る
        }
    },
    moveNext (event) {
        console.log("event");
        console.log(event); // KeyboardEvent
        console.log("event.target");
        console.log(event.target); // <input class"input-items"> boxごとにidが違うようだ
        const index = this.findIndex(event.target) // indexは数字で取得出来る
        this.moveFocus(index + 1)
    },
    movePrev (event) {
        const index = this.findIndex(event.target)
        this.moveFocus(index - 1)
    }
  }
}
</script>