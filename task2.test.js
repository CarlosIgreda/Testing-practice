const reverseString = require('./task2');

test('string as an argument and return it reversed', () => {
    const str = "hello";
    expect(reverseString(str)).toBe("olleh");
});

test('string as an argument and return it reversed', () => {
    const str = "bye";
    expect(reverseString(str)).toBe("eyb");
});