const readline = require(`readline`);
const fs = require(`fs`);
const promisify = require(`util`).promisify;

const onError = require(`./src/error`).execute;
const getHelp = require(`./src/help`).execute;
const getAuthor = require(`./src/author`).execute;
const getDescription = require(`./src/description`).execute;
const getLicense = require(`./src/license`).execute;
const getVersion = require(`./src/version`).execute;
const generate = require(`./src/generate`).execute;

const args = process.argv.slice(2);

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

const generateData = async () => {
  const number = await prompt(`Введите количество объявлений для генерации: `);
  const path = `${await prompt(`Укажите путь к файлу: `)}/data.json`;
  console.log(path);

  try {
    console.log(path);
    await promisify(fs.writeFile)(path, JSON.stringify(generate(number)));
  } catch (e) {
    if (e.code !== `EEXIST`) {
      throw e;
    }
    console.log(e);
    const write = await prompt(`Файл уже существует. Перезаписать? (y/n): `) === `y`;
    if (write) {
      await promisify(fs.unlink)(path);
      await promisify(fs.writeFile)(path, JSON.stringify(generate(number)));
    }
  }
};


if (args.length > 0) {
  console.log(args[0]);
  switch (args[0]) {
    case `--version`:
      getVersion();
      break;

    case `--help`:
      getHelp();
      break;

    case `--author`:
      getAuthor();
      break;

    case `--license`:
      getLicense();
      break;

    case `--description`:
      getDescription();
      break;

    case `--generate`:
      generateData().catch((err) =>
        console.error(err));
      break;

    default:
      onError(args[0]);
      break;
  }
} else {
  console.log(`Привет пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Кекс.
  
Для генерации данных введите команду --generate`);
}


