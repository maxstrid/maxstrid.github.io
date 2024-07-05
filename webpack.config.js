const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'static'),
        },
        watchFiles: ['src/**/*.html'],
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/*.html", to: "./[name][ext]" },
                { from: "static/*", to: "./[name][ext]" }
            ],
        })
    ]
}
