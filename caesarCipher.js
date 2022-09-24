// A caesarCipher function that takes a string and returns it with each character “shifted”. 
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charToNumMap = new Map();
const numToCharMap = new Map();

function caesarCipher_Encrypt(text, key) {
    let encrypted = '';
    const textArr = Array.from(text);
    textArr.forEach(char => {
        if (!alphabet.includes(char) && !alphabetUpper.includes(char)) {
            encrypted += char;
        } else {
            encrypted += encrypChar(char, key);
        }
    });
    return encrypted;
}

function caesarCipher_Decrypt(text, key) {
    let decrypted = '';
    const textArr = Array.from(text);
    textArr.forEach(char => {
        if (!alphabet.includes(char) && !alphabetUpper.includes(char)) {
            decrypted += char;
        } else {
            decrypted += decryptChar(char, key);
        }
    });
    return decrypted;
}

function createAlphabetMap() {
    const alphabetArr = Array.from(alphabet);

    for(let i=0; i<alphabetArr.length; i++) {
        charToNumMap.set(alphabetArr[i], i);
        numToCharMap.set(i, alphabetArr[i]);
    }
}

function encrypChar(x, key) {
    createAlphabetMap();
    const encryptedNum = (charToNumMap.get(x.toLowerCase()) + key) % 26;

    if (x.toLowerCase() === x) {
        return numToCharMap.get(encryptedNum);
    }
    return numToCharMap.get(encryptedNum).toUpperCase();

}

function decryptChar(x, key) {
    createAlphabetMap();
    const decryptedNum = ((charToNumMap.get(x.toLowerCase()) - key) + 26) % 26;

    if (x.toLowerCase() === x) {
        return numToCharMap.get(decryptedNum);
    }
    return numToCharMap.get(decryptedNum).toUpperCase();
}

export {
    caesarCipher_Encrypt, caesarCipher_Decrypt
}