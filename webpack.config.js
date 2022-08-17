const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/script/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './src/public/js'),
    filename: 'script.js',
  },
  devServer: {
    static: path.resolve(__dirname, './src/public/js'),
  },
};