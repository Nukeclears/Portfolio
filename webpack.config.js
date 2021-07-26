const path = require('path')
var StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.temp_cache'),
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
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/styles'),
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('postcss-loader'),
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                include: path.resolve(__dirname, 'src/images'),
                use: {
                    loader: require.resolve('webpack-image-resize-loader'),
                    options: {
                        width: 1200,
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                include: path.resolve(__dirname, 'src/fonts'),
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
            files: '**/*.css',
            failOnError: false,
            quiet: false,
            emitErrors: true, //lint error checking
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio',
            template: path.resolve(__dirname, './src/index.html'),
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
