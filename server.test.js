const { fizzBuzz } = require('./server.js');
const { isLeapYear } = require('./server.js');

test('FizzBuzz returns "Fizz" when the param is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('FizzBuzz returns "Buzz" when the param is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('FizzBuzz returns "FizzBuzz" when the param is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test('FizzBuzz returns the param when the param is not divisible by 3 and 5', () => {
    expect(fizzBuzz(7)).toBe(7);
});

test('isLeapYear returns true if param is a leap lear year', () => {
    expect(isLeapYear(2016)).toBe(true);
});

test('isLeapYear returns false if param is not a lear year', () => {
    expect(isLeapYear(2019)).toBe(false);
});

test('isLeapYear returns false if param is not a lear year', () => {
    expect(isLeapYear(2100)).toBe(false);
});