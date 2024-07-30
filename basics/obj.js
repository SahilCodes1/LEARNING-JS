// two types of objects, singleton and literal
//literal func
const course1 = {
    name1 : "coffee or js",
    price1: 989,
    sym1: Symbol("key1"),
    courseinstructor1: "hitesh"
}

console.log(course1["price1"]); //always access values with [] instead of 
                              //dot method because you cant access some vals like symbol in dot method

course1.name1 = "coffee or js" //you can change vals before freezing
Object.freeze(course1.name1)

// the way to combine arrays and objects is same

const course2 = {
    name2 : "chai or js",
    price2: 999,
    sym2: Symbol("key2"),
    courseinstructor2: "hiteshsir"
}

const course3 = Object.assign({}, course1, course2) // empty {} if not given everything will merge in course1
console.log(course3);
//or
const course4 = {...course1, ...course2}
console.log(course4);
// NOTE if both obj contain sane vals then only one of the vals will be returned(output) after merging

console.log(Object.keys(course1)); //returns an array of keys in course 1
console.log(Object.values(course2)); //similarly
console.log(Object.entries(course1)); //similarly