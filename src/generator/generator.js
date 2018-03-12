const {
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayIndex,
  getRandomElementsFromArray,
  generateDate
} = require(`../utils`);

const [MIN_X, MAX_X, MIN_Y, MAX_Y] = [300, 900, 150, 500];
const [MIN_PRICE, MAX_PRICE] = [1000, 1000000];
const [MIN_GUESTS, MAX_GUESTS] = [1, 5];
const [MIN_ROOMS, MAX_ROOMS] = [1, 5];

const titles = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`
];

const types = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`
];

const times = [
  `12:00`,
  `13:00`,
  `14:00`
];

const features = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`
];

const photos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];

module.exports = {
  name: `generator`,
  description: `Generates random data`,
  generateEntity() {
    const x = getRandomNumber(MIN_X, MAX_X);
    const y = getRandomNumber(MIN_Y, MAX_Y);

    return {
      author: {
        avatar: `https://image.com/123.jpg`
      },
      offer: {
        title: getRandomArrayElement(titles),
        address: `${x}, ${y}`,
        price: getRandomNumber(MIN_PRICE, MAX_PRICE),
        type: getRandomArrayElement(types),
        guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
        rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
        checkin: getRandomArrayElement(times),
        checkout: getRandomArrayElement(times),
        features: getRandomElementsFromArray(features, getRandomArrayIndex(features)),
        description: ``,
        photos
      },
      location: {
        x, y
      },
      date: generateDate()
    };
  },
  MIN_X,
  MAX_X,
  MIN_Y,
  MAX_Y,
  MIN_PRICE,
  MAX_PRICE,
  MIN_GUESTS,
  MAX_GUESTS,
  MIN_ROOMS,
  MAX_ROOMS,
  titles,
  types,
  times,
  features,
  photos,
};
