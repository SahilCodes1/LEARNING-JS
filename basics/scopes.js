function one()
{username="sahil" 
    //console.log(email);
    function two()
    {email="shamnanisahil69@gmail.com"
        console.log(username);
    }
    two()
}
one()
/* one is the parent function, two can access the data in one as its the child func.
however one cant access the data in two*/

//************interesting case*************
console.log(addone(5));
function addone(num)
{return num+1}

const addtwo = function (num){return num+2}

console.log(addtwo(5));

/* addone is a directly defined function so we can access and print data in
 it on the above lines or below lines doesnt matter but addtwo is first 
 defines as variable or constant and a function is assigned to it so if we want to access it 
 we have to print or write code on the below lines
*/