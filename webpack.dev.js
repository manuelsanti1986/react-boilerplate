const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const PORT_DEV = 3000;

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        disableHostCheck: true,
        inline: true,
        port: PORT_DEV,
        // host: "0.0.0.0",
        host: "localhost",
        historyApiFallback: true,
        stats: 'minimal',
        open: 'Chrome'
    },
});
