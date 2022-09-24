import capitalize from "../src/capitalize";

test ('capitalize first character of a string"', () => {
    expect(capitalize('hello')).toEqual('Hello');
});

test ('capitalize when string has all cap chars', () => {
    expect(capitalize('HELLO')).toEqual('HELLO');
});

test ('capitalize when string is empty, undefined, or null', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize(undefined)).toEqual(undefined);
    expect(capitalize(null)).toEqual(null);
});