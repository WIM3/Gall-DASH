// webpack.config.js
const path = require('path');

module.exports = {
  entry: './assets/js/dashboard.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};