/**
 * Webpack
 *
 * @see https://github.com/rossta/rossta.github.com
 */
var Webpack = require('webpack');
var clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Sass
const extractSass = new ExtractTextPlugin({
  filename: 'assets/stylesheets/all.bundle.css',
  // disable: process.env.NODE_ENV === 'development',
  allChunks: true
})

module.exports = {
  cache: true,
  context: __dirname,

  entry : {
    body : [
      // __dirname + '/source/assets/stylesheets/_all.css.scss',
      __dirname + '/source/assets/javascripts/_body.js.coffee'
    ]
  },

  resolve : {
    alias : {
      // Assets
      js       : __dirname + '/source/assets/javascripts',
      lib      : __dirname + '/source/assets/javascripts/_lib',
      css      : __dirname + '/source/assets/stylesheets',

      // Partial
      local    : __dirname + '/source/partial/_lib',
      atom     : __dirname + '/source/partial/_codeBlender/atom',
      molecule : __dirname + '/source/partial/_codeBlender/molecule',
      organism : __dirname + '/source/partial/_codeBlender/organism',
      social   : __dirname + '/source/partial/_codeBlender/social',
      source   : __dirname + '/source/',
      template : __dirname + '/source/partial/_codeBlender/template',

      // Partials
      patom     : __dirname + '/source/partials/atom',
      pmolecule : __dirname + '/source/partials/molecule',
      porganism : __dirname + '/source/partials/organism',
      psocial   : __dirname + '/source/partials/social',
      pblog     : __dirname + '/source/modules/blog',
      ptemplate : __dirname + '/source/partials/template',
    }
  },

  output: {
    path     : __dirname + '/.tmp',
    filename : 'assets/javascripts/[name].bundle.js'
  },

  module : {

    loaders : [

      // Coffee
      {
        test    : /.*\.coffee$/,
        exclude : /node_modules|\.tmp|vendor|bower_components/,
        loader  : "coffee-loader"
      },

      // SCSS
      {
        test   : /.*\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }],

          // Use style-loader in development
          fallback: 'style-loader'
        })
      },

      // Woff fonts
      {
        test    : /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // exclude : /node_modules|\.tmp|vendor|bower_components/,
        use  : 'url-loader'
      },

      // TTF, EOT fonts and SVG
      {
        test    : /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        // exclude : /node_modules|\.tmp|vendor|bower_components/,
        use  : 'file-loader?name=assets/fonts/[hash].[ext]'
      }
    ]
  },

  node : {
    console : true,
  },

  plugins : [

    new clean(['.tmp']),

    extractSass,

    // new ExtractTextPlugin( 'assets/stylesheets/all.bundle.css' ),

    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

  ]
};
