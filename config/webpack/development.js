const environment = require('./environment')
const webpackConfig = environment.toWebpackConfig()
webpackConfig.devtool = 'sourcemap'
module.exports = webpackConfig
