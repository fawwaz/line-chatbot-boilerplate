const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/index.js',
  ],
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  watch: true,
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["env", {"modules": false}], ['stage-2']],
          }
        },
    }]
  },
  plugins: [
    new Dotenv(),
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            "BUILD_TARGET": JSON.stringify('server'),
        }
    }),
  ],
  output: {
      path: path.join(__dirname, '/build'),
      filename: 'server.js'
  },
  stats: {
    colors: true
  },
};
