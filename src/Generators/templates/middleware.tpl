class <%= name %> {
  async handle(request, next) {
      await next;
  }
}

module.exports = <%= name %>;