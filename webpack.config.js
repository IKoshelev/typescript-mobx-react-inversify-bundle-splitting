var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  // entry: [
  //   'webpack-dev-server/client?http://localhost:50000',
  //   './src/index'
  // ],
  entry: {
    index: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  optimization:{
    //More on the configuration on splitting:
    // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configurate-cache-groups
    // https://wanago.io/2018/06/04/code-splitting-with-splitchunksplugin-in-webpack-4/
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        /*change the name prop name to change bundle name*/
        vendors: {
          test: /[\\/]node_modules[\\/]|HttpClient.*$|ServiceBase.*$|IoC*.*$/,
          priority: -10
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      include: path.join(__dirname, 'src')
    }]
  }
};
