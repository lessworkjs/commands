'use strict';

const Route = require('lesswork-framework/src/Route');

module.exports = {
  get: function () {
    return new Route(arguments).get('<%= name %>', 'App/Http/Controllers/<%= name %>Controller@get').handle();
  },
};