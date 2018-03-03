const fs = require(`fs`);
const generateEntity = require(`./generator/generator`).generateEntity;

module.exports = {
  name: `generate`,
  description: `Generates data`,
  execute(number) {
    if (!number || isNaN(Number(number))) {
      throw new Error(`Invalid number`);
    }
    const data = [];

    for (let i = 0; i < number; i++) {
      data.push(generateEntity());
    }

    return data;
  }
};
