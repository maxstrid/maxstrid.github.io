const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'static'),
        },
        watchFiles: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js'],
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
                { from: "src/routes/*.html", to: "./[name][ext]" },
                { from: "src/routes/projects/*.html", to: "./projects/[name][ext]" },
                { from: "src/routes/blog/*.html", to: "./blog/[name][ext]" },
                { from: "static/*", to: "./[name][ext]" }
            ],
        })
    ]
}
