const palindromes = function (string) {
    stringLess = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    stringLess = stringLess.replace(/\s+/g, '')
    let array = stringLess.split('');
    console.log(stringLess)
    let revAr = array.reverse();
    let revStr = revAr.join('');
    console.log(revStr)
    if (revStr == stringLess) {
        console.log(' its a palindrome')
        return true;
    } else { 'no palindrome'
            return false;}

};

// Do not edit below this line
module.exports = palindromes;
