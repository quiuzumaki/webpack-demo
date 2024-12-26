const path = require('path')
const webpack = require('webpack')
const compiler = require('./plugins/BShieldCompilerPlugin')
const { abort } = require('process')

const handler = (percentage, msg, ...args) => {
    console.log(percentage, msg, args)
}

module.exports = {
    entry: {
        // home: {
        //     import: './src/home.js',
        //     dependOn: 'user'
        // },
        // about: {
        //     import: './src/about.js',
        //     dependOn: 'user'
        // },
        about: './src/about.js',
        user: './src/user.js',
        index: './src/index.js',
        lib: './src/lib.js',
        another: './src/another.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: "common"
        }
    },
    plugins: [
        new webpack.ProvidePlugin(handler),
    ]
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist')
    //     },
    //     compress: true,
    //     port: 9000
    // }
}
