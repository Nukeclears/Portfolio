const path = require('path')
var StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default
const { VueLoaderPlugin } = require("vue-loader");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/main.js',
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
                },
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
              },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/'),
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
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '90',
            },
        }),
        new VueLoaderPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            proxy: "localhost:8080",
            //server: { baseDir: ['src'] }
          })
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/images", to: "images" },
        //     ],
        //     options: {
        //         concurrency: 100,
        //     },
        // }),
    ],
    resolve: {
        alias: {
          vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
}
