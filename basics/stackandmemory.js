//refer screenshot
let myYoutubeName="sahilShamnani"
let anotherName=myYoutubeName
anotherName="hiteshsir"

console.log(myYoutubeName); //sahilShamnani
console.log(anotherName);  //hiteshsir

/* in stack a copy of variable myYoutubeName was created and assigned to anotherName 
   so the original value of myYoutubeName did'nt change to hiteshSir*/

let userOne={
    emailId:"user@google.com",
    Upi:"user@ybl"
}

let userTwo=userOne
console.table([userOne, userTwo]) //the outdata of both userOne ans userTwo is same

/* userOne ans userTwo are objects and not variables so they dont come in stack  memory 
they come in heap memory where no copies are created and both objects(if equally assigned)
access the original data(email, upi)
*/

/* primitive datatypes use stack memory
String, Number, Boolearn, null, undefined, Symbol, BigInt

non primitive datatypes use heap memory
Array, Objects, Functions
*/