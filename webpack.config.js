const path = require('path')
const webpack = require('webpack')

const handler = (percentage, msg, ...args) => {
    console.log(percentage, msg, args)
}

module.exports = {
    entry: {
        home: './src/home.js',
        about: './src/about.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.ProvidePlugin(handler)
    ]
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist')
    //     },
    //     compress: true,
    //     port: 9000
    // }
}
