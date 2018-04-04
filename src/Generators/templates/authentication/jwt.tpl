const Kernel = require('lesswork-framework/src/Kernel');

const Jwt = require('lesswork-framework/src/Authentication/Jwt');

module.exports = {
  auth: function () {
    return new Kernel(arguments.handle(function () {
      new Jwt().auth(env('APP_KEY'));
    });
  },

  serverless: {
    AuthenticationJwt: {
      handler: 'app/Http/Authentication/Jwt.auth',
      documentation: {
        description: 'Jwt Auth.'
      }
    }
  }
};