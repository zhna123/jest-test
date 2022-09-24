import analyzeArray from "../src/analyzeArray";

test ('analyzing array of numbers return an object with the information of the array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    });
    expect(analyzeArray([0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 1
    });
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
    expect(analyzeArray([-10, 2, -1, 0])).toEqual({
        average: -2,
        min: -10,
        max: 2,
        length: 4
    });
});
