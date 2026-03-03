
function suma (a,b){
    return a+b;
}
function restar (a,b){
    return a-b;
}
function multiplicar (a,b){
    return a*b;
}
function dividir (a,b){
   if(b === 0){
    return "Error. No se puede dividir entre 0"
   }
   return a/b;
}

function Calculadora(num1, num2, operacion){
    switch(operacion.toLowerCase()){
        case "sumar":
            return sumar (num1, num2);
            case "restar":
            return restar (num1, num2);
            case "multiplicar":
            return multiplicar (num1, num2);
            case "dividir":
            return dividir (num1, num2);
            default:
                return "Operación no válida";

    }
}
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operacion (sumar, restar, multiplicar, dividir):");
const resultado = Calculadora (numero1, numero2, operacion);
console.log("Resultado: ", resultado);
alert ("Resultado: "+resultado);

function salir(){
alert("Saliendo de la calculadora...");
window.close();
}


