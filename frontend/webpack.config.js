var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    watch: true,
    watchOptions: {
        poll: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: 'body',
            hash: true
        })
    ]
};
