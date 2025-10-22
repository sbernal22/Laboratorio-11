let monto=parseInt(prompt("Ingrese el monto a retirar"));
let suma=0, billetes100=0, billetes50=0, billetes20=0, billetes10=0;
while(monto!==suma){
    if(suma+100<=monto){
        suma+=100;
        billetes100++;
    }
    else if(suma+50<=monto){
        suma+=50;
        billetes50++;
    }
    else if(suma+20<=monto){
        suma+=20;
        billetes20++;
    }
    else{
        suma+=10;
        billetes10++;
    }
}
console.log("Billetes 100: "+billetes100+ ", Billetes 50: "+billetes50+ ", Billetes 20: "+billetes20+ ", Billetes 10: "+billetes10);
