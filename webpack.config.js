const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const PUBLIC_DIR = path.join(__dirname, 'client', 'public')

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
};
