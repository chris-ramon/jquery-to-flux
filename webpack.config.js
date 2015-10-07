module.exports = {
  entry: './index',
  output: './bundle',
  module: {
    loaders: [
      {loaders: ['babel-loader']},
      {test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
