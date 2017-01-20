var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
            './src/index.js'
          ],

  module: {
		loaders: [
      {
  			test: /\.js$/,
  			loaders: ['babel-loader'],
  			exclude: /node_modules/
		  }
    ]
	},
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  }
}
