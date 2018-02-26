const getRandomElementFromArray = require(`./utils`).getRandomElementFromArray;
const getRandomNumber = require(`./utils`).getRandomNumber;

const [MIN_X, MAX_X, MIN_Y, MAX_Y] = [300, 900, 150, 500];

const x = getRandomNumber(MIN_X, MAX_X);
const y = getRandomNumber(MIN_Y, MAX_Y);

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
    return {
      author: {
        avatar: `https://image.com/123.jpg`
      },
      offer: {
        title: getRandomElementFromArray(titles),
        address: `${x}, ${y}`,
        price: getRandomNumber(1000, 1000000),
        type: getRandomElementFromArray(types),
        guests: getRandomNumber(1, 5),
        rooms: getRandomNumber(1, 5),
        checkin: getRandomElementFromArray(times),
        checkout: getRandomElementFromArray(times),
        features: [features[2], features[1], features[4]],
        description: ``,
        photos
      },
      location: {
        x, y
      }
    };
  }
};
