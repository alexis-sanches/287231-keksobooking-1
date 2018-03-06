const generateEntity = require(`./generator/generator`).generateEntity;
const readline = require(`readline`);
const fs = require(`fs`);
const {promisify} = require(`util`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (message) => {
  return new Promise((resolve) => {
    rl.question(message, (text) => {
      resolve(text);
    });
  });
};

const generateData = (number) => {
  if (!number || isNaN(Number(number))) {
    throw new Error(`Invalid number`);
  }
  const data = [];

  for (let i = 0; i < number; i++) {
    data.push(generateEntity());
  }

  return data;
};

const execute = async () => {
  const number = await prompt(`Введите количество объявлений для генерации: `);
  const path = `${await prompt(`Укажите путь к файлу: `)}/data.json`;
  let exists = false;

  try {
    await promisify(fs.readFile)(path);
    exists = true;
  } catch (e) {
    if (e.code === `ENOENT`) {
      await promisify(fs.writeFile)(path, JSON.stringify(generateData(number)));
    }
  }

  if (exists) {
    const write = await prompt(`Файл уже существует. Перезаписать? (y/n): `) === `y`;
    if (write) {
      await promisify(fs.unlink)(path);
      await promisify(fs.writeFile)(path, JSON.stringify(generateData(number)));
    }
  }
};

module.exports = {
  name: `generate`,
  description: `Generates data`,
  execute
};
