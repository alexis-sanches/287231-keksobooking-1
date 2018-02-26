const assert = require(`assert`);
const generateEntity = require(`../src/generator`).generateEntity;

describe(`Generate data`, () => {
  it(`should not return undefined`, () => {
    assert.notEqual(typeof generateEntity(), `undefined`);
  });

  it(`should have fields 'author', 'offer' and 'location'`, () => {
    assert.notEqual(typeof generateEntity().author, `undefined`);
    assert.notEqual(typeof generateEntity().offer, `undefined`);
    assert.notEqual(typeof generateEntity().location, `undefined`);
  });

  it(`should return a string on author.avatar, offer title, address, type, checkin, checkout, description`, () => {
    assert.equal(typeof generateEntity().author.avatar, `string`);
    assert.equal(typeof generateEntity().offer.title, `string`);
    assert.equal(typeof generateEntity().offer.address, `string`);
    assert.equal(typeof generateEntity().offer.type, `string`);
    assert.equal(typeof generateEntity().offer.checkin, `string`);
    assert.equal(typeof generateEntity().offer.checkout, `string`);
    assert.equal(typeof generateEntity().offer.description, `string`);
  });

  it(`should start with http on author.avatar`, () => {
    assert.equal(generateEntity().author.avatar.indexOf(`http`), 0);
  });

  it(`should return an offer title within a range of available titles`, () => {
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

    assert.notEqual(titles.indexOf(generateEntity().offer.title), -1);
  });

  it(`should return a valid string on offer.address`, () => {
    const [MIN_X, MAX_X, MIN_Y, MAX_Y] = [300, 900, 150, 500];
    const address = generateEntity().offer.address;
    const x = Number(address.slice(0, 3));
    const y = Number(address.slice(5, 8));

    assert.equal(address.length, 8);
    assert.equal(address.indexOf(`, `), 3);
    assert.ok(!isNaN(x) && !isNaN(y));
    assert.ok(x <= MAX_X && x >= MIN_X);
    assert.ok(y <= MAX_Y && y >= MIN_Y);
  });

  it(`should return a number on offer price, rooms, guests, location x and y`, () => {
    assert.equal(typeof generateEntity().offer.price, `number`);
    assert.equal(typeof generateEntity().offer.guests, `number`);
    assert.equal(typeof generateEntity().offer.rooms, `number`);
    assert.equal(typeof generateEntity().location.x, `number`);
    assert.equal(typeof generateEntity().location.y, `number`);
  });

  it(`should return a price within a range`, () => {
    const [MIN_PRICE, MAX_PRICE] = [1000, 1000000];
    const price = generateEntity().offer.price;

    assert.ok(price >= MIN_PRICE && price <= MAX_PRICE);
  });

  it(`should return a number of guests within a range`, () => {
    const [MIN_GUESTS, MAX_GUESTS] = [1, 5];
    const guests = generateEntity().offer.guests;

    assert.ok(guests >= MIN_GUESTS && guests <= MAX_GUESTS);
  });

  it(`should return a number of rooms within a range`, () => {
    const [MIN_ROOMS, MAX_ROOMS] = [1, 5];
    const rooms = generateEntity().offer.rooms;

    assert.ok(rooms >= MIN_ROOMS && rooms <= MAX_ROOMS);
  });

  it(`should return an offer type within a range of available types`, () => {
    const types = [
      `flat`,
      `palace`,
      `house`,
      `bungalo`
    ];

    assert.notEqual(types.indexOf(generateEntity().offer.type), -1);
  });

  it(`should return an offer checkin and checkout within a range of available times`, () => {
    const times = [
      `12:00`,
      `13:00`,
      `14:00`
    ];

    assert.notEqual(times.indexOf(generateEntity().offer.checkin), -1);
    assert.notEqual(times.indexOf(generateEntity().offer.checkout), -1);
  });

  it(`should return a valid array of features`, () => {
    const offerFeatures = generateEntity().offer.features;
    const features = [
      `wifi`,
      `dishwasher`,
      `parking`,
      `washer`,
      `elevator`,
      `conditioner`
    ];

    assert.ok(Array.isArray(offerFeatures));
    assert.ok(offerFeatures.length <= features.length);
    assert.equal(new Set(offerFeatures).size, offerFeatures.length);
  });

  it(`should return a valid array of photos`, () => {
    const offerPhotos = generateEntity().offer.photos;
    const photos = [
      `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
      `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
      `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
    ];

    assert.ok(Array.isArray(offerPhotos));
    assert.equal(offerPhotos.length, photos.length);

    photos.forEach((it) => {
      assert.notEqual(offerPhotos.indexOf(it), -1);
    });
    assert.equal(new Set(offerPhotos).size, offerPhotos.length);
  });

  it(`should return 2 numbers within a range on location`, () => {
    const [MIN_X, MAX_X, MIN_Y, MAX_Y] = [300, 900, 150, 500];
    const x = generateEntity().location.x;
    const y = generateEntity().location.y;

    assert.ok(x <= MAX_X && x >= MIN_X);
    assert.ok(y <= MAX_Y && y >= MIN_Y);
  });
});
