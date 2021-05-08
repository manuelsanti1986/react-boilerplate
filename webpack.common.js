const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".ttf"]
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ],
                test: /\.s?css$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                        name: '[name].[ext]',
                        outputPath: 'images',
                        esModule: false,
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        esModule: false,
                    }
                }
            },
            {
                test: /\.(txt)$/i,
                use: {
                    loader: 'raw-loader',
                    options: {
                        esModule: false,
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",   // Input FileName
            filename: "./index.html"    // Output FileName
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};
