'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development', // 추가된 부분
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ // 최신 문서에 맞춘 수정
                from: path.resolve(__dirname, 'public'), // source directory
                to: path.resolve(__dirname, 'build'), // destination directory
                globOptions: {
                    ignore: ['*.DS_Store'] // optional: ignore specific files
                }
            }]
        })
    ],
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080
    }
}
