import { calculateAngle } from "./js/calculateAngle.js";
import { enterNumbers } from "./js/enterNumbers.js";
import { printTerminal } from "./js/printData.js";

function app(){
    let result;
    const [angle1 , angle2] = enterNumbers();
    result = calculateAngle(angle1, angle2);
    printTerminal(result);
}
app()