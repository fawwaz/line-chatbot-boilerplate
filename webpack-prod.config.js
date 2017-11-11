const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [ './src/index.js' ],
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["env", {"modules": false}],['stage-2']],
          }
        },
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
      path: path.join(__dirname, '/build'),
      filename: 'server.js'
  },
  stats: {
    colors: true
  },
};
