module.exports = {
  name: `error`,
  description: `Shows error message`,
  execute(command) {
    console.error(`Неизвестная команда ` + `${command}`.red);
    console.error(`Чтобы прочитать правила использования приложения, наберите "--help"`);
    process.exit(1);
  }
};
