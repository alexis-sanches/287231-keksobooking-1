module.exports = {
  name: `help`,
  description: `All available commands`,
  execute() {
    console.log(`Доступные команды:`);
    console.log(`--help    — печатает этот текст;`);
    console.log(`--version — печатает версию приложения`);
  }
};
