const path = require('path')
var StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.less$/i, //less to css
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('less-loader'),
                    require.resolve('postcss-loader'),
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: {
                    loader: require.resolve('webpack-image-resize-loader'),
                    options: {
                        width: 1200,
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        watchContentBase: true,
    },
    plugins: [
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.less',
            failOnError: false,
            quiet: false,
            emitErrors: true, //lint error checking
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.html',
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '90',
            },
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/images", to: "images" },
        //     ],
        //     options: {
        //         concurrency: 100,
        //     },
        // }),
    ],
}
