const args = process.argv.slice(2);

if (args.length > 0) {
  switch (args[0]) {
    case `--version`:
      console.log(`v.0.0.1`);
      break;

    case `--help`:
      console.log(`Доступные команды:`);
      console.log(`--help    — печатает этот текст;`);
      console.log(`--version — печатает версию приложения`);
      break;

    default:
      console.error(`Неизвестная команда ${args[0]}`);
      console.error(`Чтобы прочитать правила использования приложения, наберите "--help"`);
      process.exit(1);
      break;
  }
} else {
  console.log(`Привет пользователь!`);
  console.log(`Эта программа будет запускать сервер «Кексобукинг».`);
  console.log(`Автор: Кекс.`);
}


