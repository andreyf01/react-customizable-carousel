var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'sourcemap' : undefined,
  stats: {
    errorDetails: true
  },
  entry: glob.sync(path.resolve('.', 'examples', 'index.js')),
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    pathinfo: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=25000'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({ title: 'React Customizable Carousel', template: path.resolve('examples', 'index.ejs') })
  ],
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('node_modules')
    ]
  },
  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  },
  devServer: {
    historyApiFallback: true
  }
})
