'use strict';

// Webpack dependencies
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

// Path definitions
var buildRoot = path.resolve(__dirname, '../../');
var appRoot = path.join(buildRoot, 'client/js/app');

// Theme namespace
var themename = 'pmc-core';

// Postcss Plugins
var postcssMixins = require('postcss-mixins');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssColorFunction = require('postcss-color-function');
var postcssCustomProps = require('postcss-custom-properties');
var postcssCustomMedia = require('postcss-custom-media');
var autoprefixer = require('autoprefixer');
var postcssCalc = require('postcss-calc');
var postcssLost = require('lost');
var stylelint = require('stylelint');
var postcssScss = require('postcss-scss');

// Environment flags
var build = process.env.NODE_ENV === 'build';
var isProduction = process.argv.indexOf('-p') !== -1;
var isHot = process.argv.indexOf('--hot') !== -1;
var shouldClean = process.argv.indexOf('--clean') !== -1;
var base64Fonts = process.argv.indexOf('--base64-fonts') !== -1;

// Plugins
var plugins = [
  new webpack.NoErrorsPlugin(),
];

if (shouldClean) {
  var pathsToClean = [], filesToExclude = [];

  // When fonts are being processed only remove the font css files
  // Otherwise, remove everything except the font files
  if (base64Fonts) {
    pathsToClean = [
      'static/css/webfonts_woff2.css',
      'static/css/webfonts_woff.css',
      'static/css/webfonts_ttf.css',
      'static/js/webfonts_woff2.bundle.js',
      'static/js/webfonts_woff.bundle.js',
      'static/js/webfonts_ttf.bundle.js'
    ];
  } else {
    pathsToClean = [
      'static/css',
      'static/js'
    ];
    filesToExclude = [
      'webfonts_woff.css',
      'webfonts_woff2.css',
      'webfonts_ttf.css',
      'webfonts_woff2.bundle.js',
      'webfonts_woff.bundle.js',
      'webfonts_ttf.bundle.js'
    ];
  }

  plugins.push(
    new CleanWebpackPlugin(pathsToClean, {
      root: buildRoot,
      exclude: filesToExclude
    })
  );
}

if (!isHot) {
  plugins.push(
    new ExtractTextPlugin('css/[name].css'),
    new LiveReloadPlugin({ appendScriptTag: true })
  );
}

// Define webpack bundles
var webpackBundles = {
    allStyles: [
      'client/js/allStyles/allStyles.js',
    ],
    dev: [
    	buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
    	'client/js/allStyles/allStyles.js',
        'client/js/site/site.js',
        'client/js/digital-daily/resend.js',
        'client/js/digital-daily/info.js',
        'client/html/footer/footer.js',
        'client/js/gallery/gallery.js',
        'client/js/collection_gallery/c_gallery.js',
        'client/js/homepage/homepage.js',
        'client/js/runway/runway.js',
        'client/js/archive/archive.js',
        'client/js/util/auth-redirect.js',
        'client/js/site/common-mobile.js',
    ],
    gallery: [
      'client/js/libs/swinxyzoom/dist/jquery.swinxy-combined.min.js',
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
      'client/js/gallery/gallery.js',
    ],
    'collection-gallery': [
      'client/js/libs/swinxyzoom/dist/jquery.swinxy-combined.min.js',
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
      'client/js/collection_gallery/c_gallery.js',
    ],
    homepage: [
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
      'client/js/homepage/homepage.js',
    ],
    archive: [
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
      'client/js/archive/archive.js'
    ],
    runway: [
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
      'client/js/runway/runway.js'
    ],
    site: [
      buildRoot + '/../pmc-plugins/pmc-js-libraries/vendor/dotdotdot/1.6.14/jquery.dotdotdot.js',
      'client/js/site/site.js',
    ],
    'digital-daily-resend': ['client/js/digital-daily/resend.js'],
    'digital-daily-info': ['client/js/digital-daily/info.js'],
    'common-mobile': ['client/js/site/common-mobile.js'],
};

// Define webpack file loaders
var webpackLoaders = [
  {
	test: /\.js$/,
	include: buildRoot,
	exclude: /node_modules/,
	loader: 'babel',
	query: {
	  presets: ['es2015']
	}
  },
  {
	test: /\.s?css$/,
	exclude: path.join(__dirname, '../js'),
	loader: !isHot ?
	  ExtractTextPlugin.extract('style-loader', 'css?-autoprefixer!postcss?parser=postcss-scss!sass') :
	  'style!css?-autoprefixer!postcss?parser=postcss-scss!sass',
  },
  {
	test: /\.s?css$/,
	include: path.join(__dirname, '../js'),
	loader: 'style!css?modules&localIdentName=[name]__[local]__[hash:base64:5]&-autoprefixer!postcss?parser=postcss-scss!sass',
  },
  {
	test: /\.json$/,
	loader: 'json',
  },
  {
	test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url'
  },
  {
	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	loader: 'url?limit=10000&minetype=image/svg+xml'
  },
  {
	test: /\.html$/,
	loader: 'dom!html',
  }
];

// If the build script has been instructed to process fonts
if (base64Fonts){

	webpackBundles = {
		webfonts_woff2: ['client/js/webfonts/webfonts-woff2.js'],
		webfonts_woff: ['client/js/webfonts/webfonts-woff.js'],
		webfonts_ttf: ['client/js/webfonts/webfonts-ttf.js'],
	};

	// base64 the font files into the font CSS bundles
	webpackLoaders.push(
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?name=[path][name].[ext]?limit=10000&minetype=application/font-woff2'
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?name=[path][name].[ext]?limit=10000&minetype=application/font-woff'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?name=[path][name].[ext]?limit=10000&minetype=application/octet-stream'
		}
	);
}

// Main webpack config
module.exports = {
  entry: webpackBundles,

  // Define module outputs
  output: {
    path: 'static',
    publicPath: !isHot ?
      '/wp-content/themes/vip/' + themename + '/static/' :
      'http://localhost:8001/static/',
    filename: 'js/[name].bundle.js',
  },

  // Where webpack resolves modules
  resolve: {
    root: buildRoot,
    modulesDirectories: [
      'node_modules'
    ]
  },

  plugins: plugins,

  externals: {
    'jQuery': 'jQuery',
  },

  eslint: {
    configFile: 'client/config/.eslintrc'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: buildRoot,
        exclude: [
          /node_modules/,
          /client\/js\/libs/,
        ],
        loader: 'eslint'
      }
    ],
    loaders: webpackLoaders,
  },

  postcss: function() {
    return [
      // stylelint(require('./stylelint.config.js')),
      autoprefixer({ browsers: ['last 3 versions'] }),
      postcssLost,
    ];
  }
};
