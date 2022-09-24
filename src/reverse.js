// A reverseString function that takes a string and returns it reversed.
function reverse(str) {
    if(str === '' || str === null || str === undefined || str.length === 1) {
        return str;
    }
    
    let first = Array.from(str)[0];
    let rest = str.slice(1);
    return reverse(rest) + first;
}

export default reverse;