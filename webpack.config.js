const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = (env, args) => ({
  mode: args.mode,
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          reactivityTransform: true
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: '@vue/runtime-dom',
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css'
    // })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all', // 모든 종류의 청크에 대해 코드 스플릿팅 적용
      minSize: 20000, // 최소 20KB가 넘는 모듈만 분리
      minChunks: 1, // 모듈이 최소 1개의 청크에서 사용될 때 분리
      maxAsyncRequests: 30, // 비동기 요청 청크 최대 수
      maxInitialRequests: 30, // 초기 로딩 청크 최대 수
      automaticNameDelimiter: '~', // 이름 구분자
      cacheGroups: {
        defaultVendors: {
          test: /[\\/\]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 이미 분리된 청크 재사용 여부
        }
      }
    }
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
})
