const path = require('path')
var StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
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
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
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
            files: '**/*.scss',
            failOnError: false,
            quiet: false,
            emitErrors: true, // by default this is to true to check the CSS lint errors
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
          }),
    ],
}
