const packageInfo = require(`../package.json`);

module.exports = {
  name: `license`,
  description: `Shows license`,
  execute() {
    console.log(packageInfo.license);
  }
};
