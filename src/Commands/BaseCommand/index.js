const {
  Command,
} = require('@adonisjs/ace');

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

class BaseCommand extends Command {
  checkIfExists(file) {
    if (typeof file === 'object') {
      let results = false;
      file.forEach((check) => {
        if (fs.existsSync(check)) {
          results = true;

        }
      });
      return results;
    }
    return fs.existsSync(file);
  }

  mkdir(dir) {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    } catch (e) {}
  }

  run(command, flags) {
    const args = [];

    if (flags) {
      Object.keys(flags).forEach((flag) => {
        if (!flags[flag]) {
          return;
        }
        args.push(`--${flag} ${flags[flag]}`);
      });
    }

    // TO-DO: spawn and detach.
    const child = exec(
      `${command} ${args}`,
      (error, stdout, stderr) => {
        if (stderr || error) {
          throw stderr || error;
        }
      }
    );

    child.stdout.on('data', (data) => {
      console.log(data);
    });

    return child;
  }

  // TO-DO: accept arrays
  ejsToFile(template, destination, options) {
    ejs.renderFile(path.join(__dirname, `../../Generators/templates/${template}.tpl`), options, async (err, data) => {
      await fs.writeFile(destination, data, 'utf8', (error) => {
        if (error) {
          throw error;
        }
      });
    });

    return this;
  }
}

module.exports = BaseCommand;