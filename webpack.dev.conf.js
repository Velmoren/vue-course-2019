// --mode development
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    //cheap-module-
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        //порт разработки
        port: 8081,
        //оверлей с ошибками прямо на экране
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((res, rej) => {
    res(devWebpackConfig)
})

