module.exports = {
    // デフォルトは/．chromeで開けるように相対パスを使うには以下を設定
    publicPath: '',
    pages: {
      index: {
        // エントリーポイントをここに指定 (最初に実行されるファイル名の事)
        entry: 'src/main.js',
        // main.jsと紐付いているテンプレートファイルを直接指定出来ていないのでここで指定する．
        template: 'public/index.html',
        // ビルド時に出力されるファイル名
        filename: 'index.html',
        // 生成htmlファイルのtitleを設定
        title: 'Index Page',
        // // チャンクの指定
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // サブページを設定るするとエントリーページのファイル以外はこちらが参照される。
      // テンプレートファイルは、 `public/subpage.html`
      // public/subpage.htmlがなかったら `public/index.html`が呼び出される。
      // 出力されるファイル名は `subpage.html`となる。
//       subpage: 'src/subpage/main.js'
//     },
//     // キャッシュバスティングのためにファイル名にハッシュをつけている。
//     // デフォルトでtrueなので、falseの場合のみ指定
    // filenameHashing: true,
//     // devServerに記載しておけば.vueコンポーネントに書いたfetchやaxiosのリクエスト先が無い場合に以下にリダイレクトしてくれる．
       // devServer経由のWebsocketを利用する事も可能．
//     devServer: {
//       port: 5000,
//       contentBase: path.resolve(__dirname, 'public'),
//       host: 'localhost',
//     },
//     css: {
//       // 毎回読み込んでおくscssファイルの指定
//       loaderOptions: {
//         sass: {
//           data: `@import "@/val.scss";`
//         }
//       }
//     },
//     configureWebpack: {
//       module: {
//         rules: [
//           {
//             test: /\.js$/,
//             loader: 'babel-loader',
//             exclude: /node_modules/,
//           },
//         ]
//       },
//       resolve: {
//         alias: {
//           'vue$': 'vue/dist/vue.esm.js',
//           '@': path.resolve(__dirname, 'src/'),
//         }
//       },
//       plugins: [
//         // plugin
//       ]
    }
  }