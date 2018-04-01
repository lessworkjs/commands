const BaseCommand = require('../BaseCommand');

class MakeTest extends BaseCommand {

  static get signature() {
    return 'make:test {name: Name of the test}';
  }

  static get description() {
    return 'Create a new test.';
  }

  handle({
    name
  }) {
    const data = {
      name
    };

    if (this.checkIfExists(Helpers.appRoot(`/test/${name}.spec.js`))) {
      return this.error(`${this.icon('error')} The test '${name}' has already been created.`);
    }

    this.ejsToFile('test', Helpers.appRoot(`/test/${name}.spec.js`), data);

    this.success(`${this.icon('success')} The test '${name}' has been created.`);
  }
}

module.exports = MakeTest;