const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Shows current version`,
  execute() {
    const colors = [`red`, `green`, `blue`];
    console.log(`v${packageInfo.version.split(`.`).map((it, i) =>
      it[colors[i]]).join(`.`)}`);
  }
};
