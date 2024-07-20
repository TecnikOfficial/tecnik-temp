const path = require('path');

module.exports = {
  entry: {
    app: './assets.js/script.min.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './assets/js/script.min.js',
  },
};
