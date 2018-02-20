const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows current version`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
