var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'testsrc');
var BUILD_PATH = path.resolve(ROOT_PATH, './html/dist');
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(APP_PATH, 'artgl-test.ts'),
  },
  // devtool: 'source-map',
  output: {
    filename: 'artglwebpack.js',
    path: BUILD_PATH
  },  
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};