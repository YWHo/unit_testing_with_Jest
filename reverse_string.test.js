const reverseString = require('./reverse_string');

test('reverseString function exists', ()=> {
  expect(reverseString).toBeDefined();
});

test('String reverse', () => {
  expect(reverseString('hello')).toEqual('olleh')
});

test('String reverse with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh')
});