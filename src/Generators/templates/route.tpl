const Route = require('@lessworkjs/framework/src/Route');

module.exports = {
  get: function () {
    return new Route(arguments).get('<%= name %>', 'App/Http/Controllers/<%= name %>Controller@get').handle();
  },
};