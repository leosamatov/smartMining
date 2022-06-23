const path = require("path");
var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const pages = ["index", "faq"]
module.exports = {
entry: 
    pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;}, {}),

output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
},

resolve: {
    extensions: ['.js', '.jsx', '.ts'],
    fallback: {
        "os": false,
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    }
},

module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
    }
]},

plugins: [htmlPlugin]
};