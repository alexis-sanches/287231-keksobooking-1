const onError = require(`./src/error`).execute;
const getHelp = require(`./src/help`).execute;
const getAuthor = require(`./src/author`).execute;
const getDescription = require(`./src/description`).execute;
const getLicense = require(`./src/license`).execute;
const getVersion = require(`./src/version`).execute;

const args = process.argv.slice(2);
const generate = require(`./src/generate`).execute;

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
      generate().then(() => process.exit(0)).catch((err) => {
        console.error(err);
        process.exit(1);
      });
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


