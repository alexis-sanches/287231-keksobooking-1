require(`colors`);

module.exports = {
  name: `help`,
  description: `All available commands`,
  execute() {
    console.log(`Доступные команды:`);
    console.log(`--help`.grey + `    — ` + `печатает этот текст`.green);
    console.log(`--version`.grey + ` — ` + `печатает версию приложения`.green);
    console.log(`--author`.grey + ` — ` + `печатает имя автора`.green);
    console.log(`--license`.grey + ` — ` + `печатает лицензию`.green);
    console.log(`--description`.grey + ` — ` + `печатает описание приложения`.green);
  }
};
