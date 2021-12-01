// helloWorld function 
let helloWorld = (name) => {
    return "Hello! " + name;
}
function double(num) {
    return num * 2
}
let isFive = (num) => {
    return num === 5;
}
let isEven = (num) => {
    return num % 2 === 0;
}

function isVowel(letter) {
    return letter.toLowerCase() === 'a' ||
        letter.toLowerCase() === 'e' ||
        letter.toLowerCase() === 'i' ||
        letter.toLowerCase() === 'o' ||
        letter.toLowerCase() === "u";

}

console.log(isVowel("F"))
console.log(isVowel("A"));