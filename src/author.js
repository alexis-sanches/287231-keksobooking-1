const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `Shows author`,
  execute() {
    console.log(packageInfo.author);
  }
};
