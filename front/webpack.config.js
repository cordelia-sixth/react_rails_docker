module.exports = {
  mode: "development",
  entry: "./src/entry.js",

  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 8080
  }

  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: "ts-loader"
  //     },
  //     // {
  //     //   test: /\.jsx?$/,
  //     //   loader:'babel-loader',
  //     // }
  //   ]
  // },
  // resolve: {
  //   extensions: [
  //     ".ts", ".tsx", ".js", ".jsx"
  //   ]
  // },
};