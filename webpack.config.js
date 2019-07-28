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
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
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
    
    