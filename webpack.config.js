 var debug = process.env.Node_ENV !== "production";
 var webpack = require('webpack');

 module.exports = {
     context: "/src",
     devtool: debug ? "inline-sourcemap" :null,
     entry: './js/client.js',
     output: {
         path: './bin',
         filename: "client.min.js",
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['react', 'es2015', 'stage-0'],
                 plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
             }
         }]
     }
 }