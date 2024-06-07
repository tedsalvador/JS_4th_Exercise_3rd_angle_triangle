// const prompt=require("prompt-sync")({sigint:true}); 
 

import { ingresarNumeros } from "./js/IngresarNumeros.js";
/* function ingresarNumeros (){
    // let ejercicio_arreglo=[];
    let anadir_numero = "";
    let pri_NumbOK;
    let seg_NumbOK;
    let salir_validacion;
    const prompt = PromptSync();

    console.warn ("Introduce 2 angulos de un triangulo");
    for (let index = 1; index < 3; index++) {
        // const element = array[index];
        salir_validacion = "NOK";        
        do{     
            anadir_numero = parseInt(prompt("El angulo numero " + index + " es = "));
            if(isNaN(anadir_numero)){
                // alert('Ingrese solo numeros!'); 
                console.error("NO TEXTO - Ingrese solo numeros");
                pri_NumbOK="NOK";
            }
            else{
                if (Number.isInteger(anadir_numero)){
                    pri_NumbOK="OK";
                    salir_validacion = "OK";
                } else {
                    console.info("Ingrese solo numeros Enteros");
                    pri_NumbOK="NOK";
                }            
                // ejercicio_arreglo.push(añadir_numero);
            }
        }
        // while(añadir_numero != "00")
        while(salir_validacion != "OK") 
    }
    console.info("Ya termino de ingresar numeros");
    } */


function app(){
   ingresarNumeros();
//    printTerminal("TESTE");
}


app()