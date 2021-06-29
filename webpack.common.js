const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')
const nodeSASS = require('node-sass')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: nodeSASS,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Asupan Wareg',
      short_name: 'AW',
      description:
        'Mudahkan anda mencari sesuatu yang membuatmu menjadi kenyang!',
      background_color: '#F35B46',
      crossorigin: 'use-credentials',
      ios: {
        'apple-mobile-web-app-title': 'Asupan Wareg',
        'apple-mobile-web-app-status-bar-style': 'black',
      },
      icons: [
        {
          src: path.resolve('src/public/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/public/icon.png'),
          size: '512x512',
        },
        {
          src: path.resolve('src/public/maskable-icon.png'),
          size: '512x512',
          purpose: 'maskable',
        },
      ],
    }),
  ],
}
