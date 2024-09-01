const gameName = new String('hitesh-hc-com') 
console.log(typeof gameName); //here the datatype is not string, 'new' makes an object and puts the string in it

const newString = gameName.substring(0, 4)
console.log(newString); //starts from 0 and ends at 3 returning a new string

const anotherString = gameName.slice(-2, 4) //slice doesnt work with negative vals/parameters
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trimes unwanted spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //output= https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar')) //outout= false
console.log(gameName.split('-'));  // (output= [ 'hitesh', 'hc', 'com' ])splitting at every - and returning an array of strings
