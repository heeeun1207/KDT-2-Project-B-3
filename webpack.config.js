// webpack 수동 작성
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: './build/src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx','.ts','.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

const serverConfig = {
  entry: './build/src/server/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          },
          output: {
            comments: false, // 주석 제거
          },
        },
      }),
    ],
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  target: 'node',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          },
          output: {
            comments: false, // 주석 제거
          },
        },
      }),
    ],
  },
};

module.exports = [clientConfig, serverConfig];