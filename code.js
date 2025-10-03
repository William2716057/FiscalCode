
//return consonants from a string
function getConsonants(str) {
    // regular expression
    const consonants = str.match(/[^aeiou\s\d\W]/gi);
    // return empty string if no consonants
    return consonants ? consonants.join('') : '';
}

function lowercaseToUppercase(str) {
    // lower to upper case
    return str.replace(/[a-z]/g, char => char.toUpperCase());
}


// get consonants
console.log(getConsonants("Hello"));
console.log(getConsonants("abcdefghijklmnop"));

// to upper caser
console.log(lowercaseToUppercase("Hello"));

// generate 3 capital consonants from the input string from second word

// generate 3 capital consonants from first word

// generate 2 numbers 


