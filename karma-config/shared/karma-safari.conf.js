var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config){

  var browser = ['SafariUM'];

  sharedConfig(config);

  config.browsers = config.browsers.concat(browser);
  
}