const path = require('path');

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0']
      }
    }]
  }
}