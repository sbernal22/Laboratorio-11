let area;
while(true){
    console.log("Menu(seleccione una opcion)");
    console.log("1) Calcular area del circulo");
    console.log("2) Calcular area del rectangulo");
    console.log("0) Salir");
    let opcion=prompt();
    if(opcion==="1"){
        let radio= parseFloat(prompt("Ingrese el radio"));
        console.log("Area: "+(radio*radio*Math.PI));
    }
    else if(opcion==="2"){
        let base=parseFloat(prompt("Ingresar base"));
        let altura=parseFloat(prompt("Ingresar altura"));
        console.log("Area: "+(base*altura));
    }
    else if(opcion==="0"){
        break;
    }
    else{
        console.log("Opcion no valida");
    }
}