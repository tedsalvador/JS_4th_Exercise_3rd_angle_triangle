
export function calculateAngle(angleOne, angleTwo) {
    let angleThree = 0;
    let mensaje = "";

    angleThree = 180 - (angleOne + angleTwo);
    if (angleThree > 0) {
        mensaje = "El Valor del Tercer Angulo es = " + angleThree;         
    } else {
        mensaje = "! Error ! Valores ingresados suman mas de 180 grados"
    }
    return mensaje;
}