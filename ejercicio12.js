while(true){
    console.log("Menu");
    console.log("1) Calcular estadisticas de N notas");
    console.log("2) Contar numeros pares e impares en un rango");
    console.log("3) Generar tabla de multiplicar");
    console.log("0) Salir");
    let opcion= prompt();
    if(opcion==="1"){
        let cantidad= parseInt(prompt("¿Cuantas notas va a ingresar?"));
        let promedio, suma=0, valorMaximo=0, valorMinimo=20, pares=0, impares=0, superiorPromedio=0;
        for(let i=0; i<cantidad; i++){
            let nota=parseInt(prompt("Ingrese la nota"));
            suma+=nota;
            if(nota>=valorMaximo)
                valorMaximo=nota;
            if(nota<=valorMinimo)
                valorMinimo=nota;
            if(nota%2==0)
                pares++;
            else
                impares++;
        }
        promedio=suma/cantidad;
        for(let i=0; i<cantidad; i++){
            let nota= parseInt(prompt("Ingrese la nota "+(i+1)+" de nuevo "));
            if(nota>promedio)
                superiorPromedio++;
        }
        console.log("Promedio: " + promedio);
        console.log("Valor máximo: " + valorMaximo);
        console.log("Valor mínimo: " + valorMinimo);
        console.log("Cantidad de pares: " + pares);
        console.log("Cantidad de impares: " + impares);
        console.log("Encima del promedio: " + superiorPromedio);
    }
    else if(opcion ==="2"){
        console.log("Ingrese el rango")
        let inicio=parseInt(prompt("Inicio"));
        let fin=parseInt(prompt("Fin"));
        let pares=0, impares=0;
        for(let i=inicio; i<=fin; i++){
            if(i%2==0)
                pares++;
            else
                impares++;
        }
        console.log("Pares: "+pares);
        console.log("Impares: "+impares);
    }
    else if(opcion==="3"){
        numero=parseInt(prompt("Ingrese un numero"));
        for(let i=1; i<=numero; i++){
            console.log(numero+" * "+i+" = "+ (numero*i));
        }
    }
    else if(opcion==="0"){
        break;
    }
    else{
        console.log("Opcion no valida");
    }
}