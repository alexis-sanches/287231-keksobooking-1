const packageInfo = require(`../package.json`);

module.exports = {
  name: `description`,
  description: `Shows description`,
  execute() {
    console.log(packageInfo.description);
  }
};
