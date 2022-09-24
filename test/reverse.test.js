import reverse from "../src/reverse";

test ('reverse a string', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('WorlD')).toEqual('DlroW');
    expect(reverse('H')).toEqual('H');
    expect(reverse('Hd')).toEqual('dH');
});

test ('reverse an empty, null, or undefined value', () => {
    expect (reverse('')).toEqual('');
    expect (reverse(null)).toEqual(null);
    expect (reverse(undefined)).toEqual(undefined);
})