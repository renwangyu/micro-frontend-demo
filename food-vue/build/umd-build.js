'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'umd'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.umd.conf')

const spinner = ora('building for umd...')
spinner.start()

rm(path.resolve(__dirname, '../umd'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
  
    console.log(chalk.cyan('📜 UMD Build complete.\n'))
  })
})
