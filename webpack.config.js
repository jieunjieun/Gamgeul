const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
            }
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            // {
            //     test: /\.sass$/,
            //     include: path.appSrc,
            //     loaders: ["style-loader", "css-loader", "sass-loader"]
            //   },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true,
                    publicPath: './dist',
                    name: '[name].[ext]?[hash]',
                },
              },
            ]
          }
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: __dirname + '/public'
    }
}