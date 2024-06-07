import PromptSync from "prompt-sync";

export function ingresarNumeros (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let salir_validacion;
    let arrayAngle = [];
    const prompt = PromptSync();

    console.warn ("Introduce 2 angulos de un triangulo");
    for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            // anadir_numero = parseInt(prompt("El angulo numero " + index + " es = "));
            // cambiamos parseInt, ya que lo convertia directamente a ENTERO y no ingresaba a la validacion
            anadir_numero = Number(prompt("El angulo numero " + index + " es = "));
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number.isInteger(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros Enteros");
                         } else 
                              {
                                if (anadir_numero <= 0 || anadir_numero >= 180)
                                    {
                                        console.info("Valor ingresado debe ser mayor 0 y menor de 180");           
                                    } else 
                                          {
                                            salir_validacion = "OK";
                                            if (index==1){
                                                pri_NumbOK = anadir_numero;
                                            } else {
                                                seg_NumbOK = anadir_numero;
                                            }    
                                          }      
                              }            
                     // ejercicio_arreglo.push(añadir_numero);
                     }
          }while(salir_validacion != "OK") 
    }
    console.info("Los dos valores Ingresados son :" + pri_NumbOK + " y " + seg_NumbOK);
    // arrayAngle.push(pri_NumbOK);
    return [pri_NumbOK, seg_NumbOK];
    }