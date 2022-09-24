import calculator from "../src/caculator";

test ('test add function in calculator object', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(0, 2)).toBe(2);
    expect(calculator.add(10, -2)).toBe(8);
});

test ('test subtract function in calculator object', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(3, 1)).toBe(2);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(-1, 5)).toBe(-6);
});

test ('test multiply function in calculator object', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(13, 4)).toBe(52);
    expect(calculator.multiply(0, 30)).toBe(0);
    expect(calculator.multiply(-2, 30)).toBe(-60);
});

test ('test divide function in calculator object', () => {
    expect(Number(calculator.divide(1, 2).toFixed(1))).toBe(0.5);
    expect(Number(calculator.divide(13, 4).toFixed(1))).toBe(3.3);
    expect(Number(calculator.divide(0, 30))).toBe(0);
    expect(Number(calculator.divide(30, 0))).toBe(NaN);
    expect(Number(calculator.divide(-2, 30).toFixed(1))).toBe(-0.1);
});