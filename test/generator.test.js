const assert = require(`assert`);
const {
  generateEntity,
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
} = require(`../src/generator/generator`);

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
    assert.notEqual(titles.indexOf(generateEntity().offer.title), -1);
  });

  it(`should return a valid string on offer.address`, () => {
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
    assert.equal(typeof generateEntity().date, `number`);
  });

  it(`should return a price within a range`, () => {
    const price = generateEntity().offer.price;

    assert.ok(price >= MIN_PRICE && price <= MAX_PRICE);
  });

  it(`should return a number of guests within a range`, () => {
    const guests = generateEntity().offer.guests;

    assert.ok(guests >= MIN_GUESTS && guests <= MAX_GUESTS);
  });

  it(`should return a number of rooms within a range`, () => {
    const rooms = generateEntity().offer.rooms;

    assert.ok(rooms >= MIN_ROOMS && rooms <= MAX_ROOMS);
  });

  it(`should return an offer type within a range of available types`, () => {
    assert.notEqual(types.indexOf(generateEntity().offer.type), -1);
  });

  it(`should return an offer checkin and checkout within a range of available times`, () => {
    assert.notEqual(times.indexOf(generateEntity().offer.checkin), -1);
    assert.notEqual(times.indexOf(generateEntity().offer.checkout), -1);
  });

  it(`should return a valid array of features`, () => {
    const offerFeatures = generateEntity().offer.features;

    assert.ok(Array.isArray(offerFeatures));
    assert.ok(offerFeatures.length <= features.length);
    assert.equal(new Set(offerFeatures).size, offerFeatures.length);
  });

  it(`should return a valid array of photos`, () => {
    const offerPhotos = generateEntity().offer.photos;

    assert.ok(Array.isArray(offerPhotos));
    assert.equal(offerPhotos.length, photos.length);

    photos.forEach((it) => {
      assert.notEqual(offerPhotos.indexOf(it), -1);
    });
    assert.equal(new Set(offerPhotos).size, offerPhotos.length);
  });

  it(`should return 2 numbers within a range on location`, () => {
    const x = generateEntity().location.x;
    const y = generateEntity().location.y;

    assert.ok(x <= MAX_X && x >= MIN_X);
    assert.ok(y <= MAX_Y && y >= MIN_Y);
  });

  it(`should return a timestamp within 7 days from now`, () => {
    const [DAYS, HOURS, MINUTES, SECONDS] = [7, 24, 60, 60];
    const now = Math.round(new Date().getTime() / 1000);
    const entityDate = generateEntity().date;

    assert.ok(entityDate >= now - DAYS * HOURS * MINUTES * SECONDS);
  });
});
