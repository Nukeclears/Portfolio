const path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      // {
      //   test: /\.css$/i,
      //   include: path.resolve(__dirname, 'src'),
      //   use: ['style-loader', 'css-loader', 'postcss-loader'],
      // },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
      emitErrors: true // by default this is to true to check the CSS lint errors
    }),
  ],
};