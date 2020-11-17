const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //точка входа
    entry: {
        app: './src/index.js'
    },
    //точка выхода
    output: {
        //имя файла (если у нас будет несколько точек входа)
        filename: "[name].js",
        //путь
        path: path.resolve(__dirname, './dist'),
        //пусть к папке dist
        publicPath: "/dist"
    },
    module: {
        //правила компиляции
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            esModule: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer'),
                                    require('css-mqpacker'),
                                    require('cssnano')({
                                        preset: [
                                            'default', {
                                                discardComments: {
                                                    removeAll: true
                                                }
                                            }
                                        ]
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    },
                ],
            }
        ]
    },
    //подключение плагинов
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'
        })
    ]
}
