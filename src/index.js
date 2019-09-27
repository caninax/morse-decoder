const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrOfEncoded = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrOfEncoded.push(expr.substr(i, 10));
    }
    const arrOfLetters = arrOfEncoded.map(el => el.match(/.{1,2}/g).map(el => el.replace('00', '').replace('10', '.').replace('11', '-')).join(''));
    let str = '';
    arrOfLetters.forEach(el => str += el === '**********' ? ' ' : MORSE_TABLE[el]);

    return str;
}

module.exports = {
    decode
}