const webpack = require('webpack');
const path = require('path');
let disPath = path.resolve(__dirname, './dist')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: __dirname +"/dist",//打包后的文件存放的地方
    filename: "[name].js",//打包后输出文件的文件名
  },
  optimization: {
    minimizer: [
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'eval-source-map',
  devServer: { //webpack-dev-server
    inline: true,//实时刷新,
    port: 2999,
  },
}