const add = (a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add tow numbers ', () => {
    const result = add(3,4);

    expect(result).toBe(7);

});

test('Show generate greeting', () => {
    const result = generateGreeting('Ali');

    expect(result).toBe('Hello Ali!');
});