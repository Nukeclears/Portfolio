const path = require('path')
var StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default
const { VueLoaderPlugin } = require("vue-loader");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    mode: 'development',
    entry: {
        index: './src/main.js',
        styles: './src/styles.js',
    },
    cache: {
        type: 'memory',
      },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.js',
        clean: true,
    },
    resolve: {
        alias: {
          vue$: "vue/dist/vue.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
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
                include: path.resolve(__dirname, 'src'),
                // use: {
                //     loader: require.resolve('webpack-image-resize-loader'),
                //     options: {
                //         width: 1200,
                //     },
                // },
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
        new StylelintPlugin({
            context: path.resolve(__dirname, 'src'),
            extensions: ['css', 'scss', 'sass']
            //fix: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio',
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        // new ImageminPlugin({
        //     disable: prod ? true : false,
        //     pngquant: {
        //         quality: '90',
        //     },
        // }),
        new VueLoaderPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: "localhost:8080",
          })
    ],
}
