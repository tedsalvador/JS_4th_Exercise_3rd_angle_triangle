import { calculateAngle } from "./js/calculateAngle.js";
import { ingresarNumeros } from "./js/ingresarNumeros.js";
import { printTerminal } from "./js/printData.js";

function app(){
    let result;
    const [angle1 , angle2] =   ingresarNumeros();
    result = calculateAngle(angle1, angle2);
    printTerminal(result);
}
app()