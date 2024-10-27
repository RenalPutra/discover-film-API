const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const imageminPlugin = require('imagemin-webpack')
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]',
              outputpath : 'images',
              publicpath : 'images',
              emitFile : true,
              esModule : false
            }
          },
          {
            loader : imageminPlugin.loader,
            options: {
              bail: false,
              cache : false,
              imageminOptions : {
                plugins:[
                  ["gifsicle", {interlaced: true , optimizationLevel : 3}],   
                ]
              }
            }
          }
          ],

      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
