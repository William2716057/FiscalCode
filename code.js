
//return consonants from a string
function getConsonants(str) {
    // regular expression
    const consonants = str.match(/[^aeiou\s\d\W]/gi);
    // return empty string if no consonants
    return consonants ? consonants.join('') : '';
}

// Example usage:
console.log(getConsonants("Hello"));
console.log(getConsonants("abcdefghijklmnop"));

// generate 3 capital consonants from the input string 


