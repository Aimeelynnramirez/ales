const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TreatPlugin = require('treat/webpack-plugin');
module.exports = {
  entry:{ 
  main: './../index.js',
},
output: {
  path: __dirname + '/build',
  publicPath: '/',
  filename: 'index.js'
},
devServer: {
  contentBase: './build'
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./../index.html",
      filename: "./index.html"
    }),
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
 
    })
  ]
};
    
    