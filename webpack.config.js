const webpackClientConfig= require('./webpack.client.config.js');
const webpackServerConfig= require('./webpack.server.config.js');

module.exports= [
  webpackClientConfig, webpackServerConfig
];
