const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'budget-tool': __dirname + '/src/index.js',
  },
  output: {
      filename: '[name].js',
      path: __dirname + '/dist',
      publicPath: 'http://localhost:8080/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: ['/node_modules/', '/tests/']
      },
      {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('budget-tool.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false
  },
  devtool: 'inline-source-map'
};
