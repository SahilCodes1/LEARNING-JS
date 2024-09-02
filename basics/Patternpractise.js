let n=5

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
    

    

