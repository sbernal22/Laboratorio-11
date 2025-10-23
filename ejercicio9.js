let numero=parseInt(prompt("Ingrese un numero"));
let suma=0;
for(let i=1; i<=numero; i++){
    if(i%5==0){
        continue;
    }
    suma+=i;
}
console.log(suma);