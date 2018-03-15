const path = require('path');
const webpack = require('webpack');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
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
                presets: ['es2015', 'react']
            }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true,
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
    },
    performance: {
        hints: false
    },
    plugins: [
        new uglifyJSPlugin()
    ]
}