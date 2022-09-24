// An analyzeArray function that takes an array of numbers and returns an object 
// with the following properties: average, min, max, and length.
// eg:
// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analyzeArray(arr) {
    const length = arr.length;

    if (length === 0) {
        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0
        };
    }

    let total = 0;
    let min = arr[0];
    let max = arr[0];
    arr.forEach(element => {
        total += element;
        if (element < min) {
            min = element;
        } 
        if (element > max) {
            max = element;
        }
    });
    const average = Math.round(total / length);
    
    const object = new Object();
    object.average = average;
    object.min = min;
    object.max = max;
    object.length = length;

    return object;
}

export default analyzeArray;