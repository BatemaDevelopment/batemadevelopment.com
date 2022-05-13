const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/**/*.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: './**/*.js',
  },
  experiments: {
    asyncWebAssembly: true,
    snyncWebAssembly: true,
    outputModule: true,
    topLevelAwait: true,
  },
}