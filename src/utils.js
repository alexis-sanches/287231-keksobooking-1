const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomArrayIndex = (array) =>
  getRandomNumber(0, array.length);

const getRandomElementsFromArray = (arr, numberOfElements) => {
  const arrayCopy = [...arr];
  const newArray = [];

  for (let i = 0; i < numberOfElements; i++) {
    const randomIndex = getRandomArrayIndex(arrayCopy);

    newArray.push(arrayCopy[randomIndex]);
    arrayCopy.splice(randomIndex, 1);
  }

  return newArray;
};

const getRandomArrayElement = (array) =>
  array[getRandomArrayIndex(array)];

const generateDate = () => {
  const now = new Date();
  return Math.round(new Date(now.getFullYear(), now.getMonth(), now.getDate() - getRandomNumber(0, 7) + 1).getTime() / 1000);
};

module.exports = {
  name: `utils`,
  description: `Some common functions`,
  getRandomNumber,
  getRandomArrayIndex,
  getRandomElementsFromArray,
  getRandomArrayElement,
  generateDate,
};
