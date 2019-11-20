module.exports = {
  entry: './index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'fast-css-loader',
          {
            loader: 'fast-sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'source-map'
};
