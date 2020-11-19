/* Base config:
  ========================================================================== */
// const fs = require('fs')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

//пути
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
  fonts: 'assets/fonts/'
}

//получение массива PAGES для последующего перебора
const PAGES_DIR = PATHS.src
// const PAGES = fs
//   .readdirSync(PAGES_DIR)
//   .filter(fileName => fileName.endsWith('.html'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
    //свои точки входа
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    // filename: `${PATHS.assets}js/[name].[hash].js`,
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    /*
      publicPath: '/' - relative path for dist folder (js,css etc)
      publicPath: './' (dot before /) - absolute path for dist folder (js,css etc)
    */
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        // Vue
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          // name: `${PATHS.assets}[folder]/[name].[ext]`,
          name: `assets/fonts/[name]/[name].[ext]`,
          emitFile: false,
        }
      },
      {
        // images / icons
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // esModule: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`}
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      },
      {
        // css
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`}
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
      '@': `${PATHS.src}/js`, // Example: import Sort from "@/utils/sort.js"
      vue$: 'vue/dist/vue.js'
    }
  },
  plugins: [
    // Vue loader
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}css/[name].[hash].css`
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Images:
        {
          from: `${PATHS.src}/${PATHS.assets}img`,
          to: `${PATHS.assets}img`
        },
        // Fonts:
        {
          from: `${PATHS.src}/${PATHS.assets}fonts`,
          to: `${PATHS.assets}fonts`
        },
        // Static (copy to '/'):
        {
          from: `${PATHS.src}/static`,
          to: ''
        }
      ]
    }),
    //постраничная компиляция
    new HtmlWebpackPlugin(
      {
        template: `${PAGES_DIR}/index.html`,
        filename: `./index.html`,
        //титл страницы
        title: 'Webpack Template',
        //отменяет сжатие html
        minify: false,
        //отключает дублирование подключений css и js
        inject: false
      }
    ),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about.html`,
      filename: `./about.html`,
      //титл страницы
      title: 'About Template',
      //отменяет сжатие html
      minify: false,
      //отключает дублирование подключений css и js
      inject: false
    })
    //автоматический перебор страниц и компиляция в dist
    // ...PAGES.map(
    //   page =>
    //     new HtmlWebpackPlugin({
    //         template: `${PAGES_DIR}/${page}`,
    //         filename: `./${page}`,
    //         //титл страницы
    //         title: 'Webpack Template',
    //         //отменяет сжатие html
    //         minify: false,
    //         //отключает дублирование подключений css и js
    //         inject: false
    //       }
    //     )
    // )
  ]
}
