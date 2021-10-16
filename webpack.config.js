
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
        new HtmlWebpackPlugin({
            title: 'HW30-Webpack',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
          },          
          compress: true,
          port: 3000,
          open: true,
    },
    mode: 'development',
};