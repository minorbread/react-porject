const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
      },
      {
        enforce: "pre", // 编译器执行
        test: /.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: [path.resolve(__dirname, "../node_modules")]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  }

}
