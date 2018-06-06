const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const gsapModules = process.env.GSAP_PLUGINS ? {
  CustomBounce: [path.join(__dirname, 'lib/gsap/CustomBounce.js')],
  CustomEase: [path.join(__dirname, 'lib/gsap/CustomEase.js')],
  physics2D: [path.join(__dirname, 'lib/gsap/Physics2DPlugin.js')],
} : {};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './demo/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/template.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GSAP_PLUGINS: JSON.stringify(process.env.GSAP_PLUGINS),
      },
    }),
    new webpack.ProvidePlugin(gsapModules),
  ],
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false',
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'assets/fonts'),
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // include: __dirname,
        include: path.join(__dirname, '../'),
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'raw-loader'],
        include: __dirname,
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        include: path.join(__dirname, 'assets'),
        exclude: path.join(__dirname, 'assets/fonts'),
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png',
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/gif',
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg',
        include: path.join(__dirname, 'assets'),
      },
    ],
  },
};
