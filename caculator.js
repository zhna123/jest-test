// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. Each of these functions should take two numbers and 
// return the correct calculation.

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b === 0 ? NaN : a / b;
    }
};

export default calculator;