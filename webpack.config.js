var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.js?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2017', 'stage-0']
        }
      }
    }],
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.js"
  },
  plugins: debug ? [new ExtractTextPlugin('styles.css')] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('styles.css'),
  ],
};