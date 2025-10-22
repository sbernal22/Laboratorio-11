let nota, suma=0, promedio;
for(let i=0;i<5;i++){
    nota=parseFloat(prompt("Ingresar nota"));
    while(nota>20||nota<0){
        console.log("Nota invalida, ingrese otra");
        nota=parseFloat(prompt("Ingresar nota"));
    }
    suma+=nota;
}
promedio=suma/5;
console.log(promedio);
