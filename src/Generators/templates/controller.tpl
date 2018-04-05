class <%= name %>Controller extends require('@lessworkjs/framework/src/Controller') {
  get() {
    return {
      hello: 'world'
    };
  }
}

module.exports = <%= name %>Controller;