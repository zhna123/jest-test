import { caesarCipher_Encrypt, caesarCipher_Decrypt } from "./caesarCipher";

test ('test caesarCipher encryption', () => {
    expect(caesarCipher_Encrypt('abc,def,g', 1)).toEqual('bcd,efg,h');
    expect(caesarCipher_Encrypt('a,z xyz', 1)).toEqual('b,a yza');
    expect(caesarCipher_Encrypt('A!BC" ZZab c', 1)).toEqual('B!CD" AAbc d');
    expect(caesarCipher_Encrypt('A!BC"Zz  ', 3)).toEqual('D!EF"Cc  ');
});

test ('test caesarCipher decryption', () => {
    expect(caesarCipher_Decrypt('bcd,efg,h', 1)).toEqual('abc,def,g');
    expect(caesarCipher_Decrypt('b,a yza', 1)).toEqual('a,z xyz');
    expect(caesarCipher_Decrypt('B!CD" AAbc d', 1)).toEqual('A!BC" ZZab c');
    expect(caesarCipher_Decrypt('D!EF"Cc  ', 3)).toEqual('A!BC"Zz  ');
});