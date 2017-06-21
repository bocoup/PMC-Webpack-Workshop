'use strict';

// Webpack dependencies
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Main webpack config
module.exports = {
  entry: {
    home: './app/homepage/index.jsx',
    portfolio: './app/portfolio/index.jsx',
    post: './app/post/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['es2015','react']
          }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name:'images/[name].[ext]'
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          // Output below fonts directory
          name: 'fonts/[name].[ext]',
        },
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: false,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['home'],
      filename: 'index.html',
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['portfolio'],
      filename: 'portfolio.html',
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['post'],
      filename: 'post.html',
      template: 'index.html'
    }),
  ]
}
