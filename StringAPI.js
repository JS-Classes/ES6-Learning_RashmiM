// Long string literal

// let longString = "This is sentence,This is sentence.\
// This is sentence,This is sentence. \
// This is sentence,This is sentence. ";

// let longString = `This is sentence,This is sentence.\
// This is sentence,This is sentence. \
// This is sentence,This is sentence. `;

let sentence = "this chapter introduces the concepts, objects and functions.";
let sentenceObject = new String(sentence);

console.log(sentence.charAt(10));
console.log(sentence.charCodeAt(10));
console.log(sentence.concat('10'));
console.log(sentence.startsWith());
console.log(sentence.endsWith('This'));
console.log(sentence.includes('the'));
console.log(sentence.indexOf('t'));
console.log(sentence.lastIndexOf('t'));
console.log(sentence.repeat(5));
console.log(sentence.replace("s","S"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.split(''));
console.log(sentence.substr(0,5));