let numero=prompt("Ingrese un numero");
let suma=0;
for(let digito of numero){
    digito=parseInt(digito);
    suma+=Math.pow(digito, numero.length);
}
if(suma==parseInt(numero)){
    console.log("Es un numero de Armstrong");
}
else{
    console.log("No es un numero de Armstrong");
}