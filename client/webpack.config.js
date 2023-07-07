const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
      ,
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader',
      }
    ],
  },
  performance: {
    hints: false,
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3030',
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};

module.exports = clientConfig;