console.log("Carrito de compras");
let totalParcial=0, totalFinal;
let presupuesto= parseFloat(prompt("Ingrese su presupuesto"));
while (true){
    let continuar= prompt("¿Continuar?(y/n)");
    if(continuar==="y"){
        let precio=parseFloat(prompt("Ingresar precio"));
        if(totalParcial+precio<presupuesto){
            totalParcial+=precio;
        }
        else{
            console.log("Este producto excede el precio, no se incluirá");
            break;
        }
    }
    else if(continuar==="n"){
        break;
    }
    else{
        console.log("Opcion no valida");
    }
}
console.log("Total parcial a pagar: "+totalParcial);
if(totalParcial>100){
    console.log("Tiene un descuento del 10%");
    totalFinal=totalParcial*0.9;
}
else if(totalParcial>=50){
    console.log("Gana un cupón de 5%");
    totalFinal=totalParcial*0.95;
}
else{
    console.log("No aplica descuento");
    totalFinal=totalParcial;
}
console.log("Total a pagar: "+totalFinal);