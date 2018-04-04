const Kernel = require('lesswork-framework/src/Kernel');

module.exports = {
  handle: function () {
    return new Kernel(arguments).handle(function () {
      State.callback(null, 'success');
    });
  },

  serverless: {
    <%= name %>Function: {
      handler: 'app/Http/Functions/<%= name %>Function.handle',
    }
  }
};