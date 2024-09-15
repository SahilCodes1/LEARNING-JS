/***********FOR LOOP***********  */
for (let i = 0; i <= 10; i++) {
  const element = i;
  //console.log(`i=`,i); 
     for (let j = 0; j <= 10; j++) {
      const element = j;
      //console.log(`${i}*${j}=`, i*j);
      }}

/***********FOR IN LOOP**********/
 let myobj = { fname:"sahil", lname:"shamnani", age:19}   
for (const x in myobj) {  
  console.log(`${x} : ${myobj[x]}`);}



/***********FOR OF LOOP*********** 
 here the object is not an object, 
 it means an iterbke structure like nodelists, arrays, strings */
const anarray = [45, 50, 55, 60]
 for (const num of anarray) {
    //console.log(num);
    
 } //45 \n 50 \n 55 \n 60


/********* FOR EACH LOOP **********
  */

/********* FILTER METHOD **********
 can be used only on arrays, if you want to use on obejcts, 
 first convert them into array by object.keys(), object.values()
 and object.entries()
*/

const mynums = [1, 2, 3, 4, 5]
const newnums = mynums.filter((num)=>{return num<4})
//console.log(newnums); [ 1, 2, 3 ]

const rnums = [1, 2, 3, 4, 5]
const addten = rnums.map((num)=>num+10)
//console.log(addten); [ 11, 12, 13, 14, 15 ]

/********UNDERSTANDING REDUCE******** 
 acc is accumalator which is assigned the value 0, once the
 price is added to it, the result(acc+item.price) is assigned
 accumalator agiain and the iteration works on*/
 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); //22996



