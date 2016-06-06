var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './entry/main.js'
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { 
                test: /\.handlebars$/, 
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};