const  reverseString = (string) => {
    let string2 = '';
    for(let i = string.length - 1; i >= 0; i -= 1) {
        string2 += string[i];
    }
    return string2;
}

module.exports = reverseString;