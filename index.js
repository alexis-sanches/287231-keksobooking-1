const args = process.argv.slice(2);
const onError = require(`./src/error`).execute;
const getHelp = require(`./src/help`).execute;
const getAuthor = require(`./src/author`).execute;
const getDescription = require(`./src/description`).execute;
const getLicense = require(`./src/license`).execute;
const getVersion = require(`./src/version`).execute;

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

    default:
      onError(args[0]);
      break;
  }
} else {
  console.log(`Привет пользователь!`);
  console.log(`Эта программа будет запускать сервер «Кексобукинг».`);
  console.log(`Автор: Кекс.`);
}


