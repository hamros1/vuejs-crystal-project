'use strict'
const path=require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
	test:/\.css$/,
	use:[
	  MiniCssExtractPlugin.loader,
	  "css-loader",
	  "postcss-loader",
	]
      },
      {
	test: /\.vue$/,
	loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({"filename":"styles.css"}),
    new VueLoaderPlugin()
  ]
}
