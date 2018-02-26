module.exports = {
  name: `utils`,
  description: `Some common functions`,
  getRandomElementFromArray(array) {
    return array[Math.round((array.length - 1) * Math.random())];
  },
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};
