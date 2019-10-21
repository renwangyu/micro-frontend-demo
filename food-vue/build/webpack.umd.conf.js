'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  entry: {
    food: './src/main-single-spa.ts'
    // vendor: [
    //   "lodash"
    // ]
  },
  output: {
    path: path.resolve(__dirname, '../umd'),
    filename: 'food.umd.js',
    library: 'food',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[hash].css')
    })
  ]
})

module.exports = webpackConfig
