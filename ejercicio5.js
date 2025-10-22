let numero, pares=0, impares=0;
for(let i=0; i<10; i++){
    numero=parseInt(prompt("Ingrese un numero"));
    if(numero%2==0){
        pares++;
    }
    else{
        impares++;
    }
}
console.log("Pares: "+pares+", Impares: "+impares);