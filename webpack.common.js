const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/
            },
            {
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                test: /\.s?css$/,
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"]
    }
};
