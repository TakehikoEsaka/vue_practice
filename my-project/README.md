# javascriptの基本文法まとめ

変数はletを使う
let name = "John"

console.logのtips
console.log("Hello ${name}さん") ※変数の参照

if文の書き方
if(条件式){
     処理
} elseif(条件式){
    処理
}

for文の書き方
for (変数の定義; 条件式; 変数の更新){
    処理
}

配列とは
test = ["hey", "takehiko"]

オブジェクトとは
test = {word:"hey", name::"takehiko"}
console.log(test.name)
test.name = "esaka" ※値の更新
console.log(test.name)

関数の定義方法
const test = function(引数){
    処理
return 戻り値
}

上の関数をアロー関数に書き換え
const test = (引数) => {
    処理
return 戻り値
}

オブジェクトを要素に持つ配列
const test = [
    {word:"hey", name::"takehiko"},
    {word:"hey", name::"esaka"}
]
console.log(const[0].name)

オブジェクトのプロパティがオブジェクトの例
const tset = {
    word: {
        first: "good",
        second: "morning"
    },
    name : "takehiko"
}

１つのプロパティに複数の値を詰める時
const test = {
    word: ["good", "morning"],
    name: "takehiko"
}

オブジェクトのプロパティが関数の例
const test = {
    say:"hi",
    greeting: test_function = () => {
        console.log("takehiko")
    }
}

クラスの書き方（コンストラクタ・継承・オーバーライド）
exportとimport (値・クラス)
相対パス
map, find, filterメソッド
コールバック関数