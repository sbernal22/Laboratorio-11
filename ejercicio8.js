let numero= parseInt(prompt("Ingrese un numero"));
let divisor;
for(let i=2; i<=numero; i++){
    divisor=0;
    for(let j=2; j<=i;j++){
        if(i%j==0){
            divisor++;
        }
    }
    if(divisor==1){
        console.log(i);
    }
}