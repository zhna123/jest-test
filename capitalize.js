// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
    if(str === '' || str === undefined || str === null) {
        return str;
    }
    let first = Array.from(str)[0];
    let capFirst = first.toUpperCase();
    return capFirst + str.slice(1)
}

export default capitalize;