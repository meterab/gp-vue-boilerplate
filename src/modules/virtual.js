const VirtualLocales = require('./virtual/Locales');
const VirtualCms = require('./virtual/Cms');
// const webpack = require('webpack');
// const path = require('path');

module.exports = function () {
  this.extendBuild(config => {
    config.plugins.push(new VirtualLocales());
    config.plugins.push(new VirtualCms());
    // config.plugins.push(new webpack.DefinePlugin({ CLIENT_APP_PATH: JSON.stringify('@/test/') }));
  });
};
