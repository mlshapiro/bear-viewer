var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './www/index.js',                    // root .js file
  output: {
    path: path.resolve(__dirname, './www'),   // full output app in `/www` directory
    filename: 'build.js'                      // full single file app
  },
  // context: __dirname + '/src',      // full app in `/src` directory
  // resolveLoader: { modulesDirectories: ["node_modules"], root: __dirname + '/node_modules' },
  
  module: {

    // all .js files should be transpiled first
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
      },

      // all binary files should used the file loader
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },

      // vue templates
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  // required to run the "compliler" in dev mode
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
}