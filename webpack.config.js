var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/next_move.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
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
  devtool: 'source-maps',
  externals: {
       fs: '{}',
       tls: '{}',
       net: '{}',
       console: '{}'
     }
};
