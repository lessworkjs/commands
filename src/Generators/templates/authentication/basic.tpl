const Kernel = require('lesswork-framework/src/Kernel');

const Basic = require('lesswork-framework/src/Authentication/Basic');

module.exports = {
  auth: function () {
    return new Kernel(arguments).handle(function () {
      new Basic().auth('test', 'test');
    });
  },

  serverless: {
    AuthenticationBasic: {
      handler: 'app/Http/Authentication/Basic.auth',
      documentation: {
        description: 'Basic Auth.'
      }
    }
  }
};