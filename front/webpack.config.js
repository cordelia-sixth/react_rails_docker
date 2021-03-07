const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",

  // // bundle fileの格納先を指定
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },

  // webpack-dev-serverの設定
  devServer: {
    compress: true, // ファイルを圧縮する
    hot: true,
    host: '0.0.0.0', // hostを指定する
    port: 8080 //　待ち受けportを指定する
  },

  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader"
      // },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
        template: './src/index.html'
    })
  ],

  // import分でファイルを指定する時に拡張子を省略する
  resolve: {
    extensions: [
      ".js", ".jsx"
    ]
  }
};