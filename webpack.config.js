const path = require('path');
const { MarkdownCompiler } = require('./markdown-compiler.plugin.js');

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
        watchFiles: ['src/**/*.html', 'src/**/*.css', 'src/**/*.js', 'src/**/*.md'],
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
        new MarkdownCompiler({
            pattern: "src/routes/blog/pages/*.md",
            template: "src/routes/blog/template.html",
            outputPath: "./blog/",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/routes/*.html", to: "./[name][ext]" },
                { from: "src/routes/projects/*.html", to: "./projects/[name][ext]" },
                { from: "src/routes/blog/*.html", to: "./blog/[name][ext]" },
                { from: "static/*", to: "./[name][ext]" },
                // Flatten component templates into a templates dir
                { from: "src/components/**/*.html", to: "./templates/[name][ext]" }
            ],
        })
    ]
}
