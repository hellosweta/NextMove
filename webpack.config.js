var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/next_move.jsx",
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
