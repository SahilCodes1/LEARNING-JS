
let n = 5;
/*for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}*/

for (let j = n; j >=0; j--) {
    let str="* ";
    console.log(str.repeat(j));
}

function pattern(){
    
for (let k = 1; k <= n; k++){
    let row=("")
    for (let l = 1; l<=k ; l++) {
        row+= "*";}
    for (let sp = 1; sp <= (n-k); sp++) {
        row+="  ";}
    for (let l = 1; l<=k ; l++) {
        row+= "*";
    }
    console.log(row);}

}

pattern()
    

    

