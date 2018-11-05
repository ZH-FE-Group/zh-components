var path = require('path')
module.exports = {
  lintOnSave: false,
  baseUrl: '/dist/', // 根域上下文目录
  outputDir: path.resolve(__dirname, './dist'), // 构建输出目录
  filenameHashing: false,
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    config.entry = './src/src/index.js'
    config.output.filename = 'zh-components.js'
    config.output.library = 'zh-components'
    config.output.libraryTarget = 'umd'
    config.output.umdNamedDefine = true
  }
}
