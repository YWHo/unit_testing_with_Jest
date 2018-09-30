const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log('Checking Name...');

describe('Checking names', ()=> {
  beforeEach(()=> nameCheck());

  test('User is Jack', () => {
    const user = 'Jack';
    expect(user).toBe('Jack');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  })
});

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database closed...');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(false)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBeTruthy
test('Should be truthy', () => {
  expect(functions.checkValue(true)).toBeTruthy();
  expect(functions.checkValue(1)).toBeTruthy();
  expect(functions.checkValue(2)).toBeTruthy();
  expect(functions.checkValue({})).toBeTruthy();
  expect(functions.checkValue([])).toBeTruthy();
});

// Note: toBe <-- for primitive comparison
//       toEqual <-- for object comparison

// toEqual
test('User should be Tony Stark object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Tony',
    lastName: 'Stark'
  });
});

// toBeLessThan
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600)
});

// toMatch (Regex)
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// toContain (Arrays)
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data
test('Promise: User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

// Async Await
test('Async-await: User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');

});