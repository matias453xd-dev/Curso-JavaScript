class Calculadora {
    sumar(num1,num2){
        return num1+num2;
    }
    restar(num1,num2){
        return num1-num2;
    }
    Multiplicar(num1,num2){
        return num1*num2;
    }
    dividir(num1,num2){
        if(num2 != 0){
            return num1/num2;
        } else {
            console.log("No se puede dividir por 0");
        }

    }
    potenciar(num1,exp){
        return num1**exp;
    }
}
const calculadora = new Calculadora();

alert("Que operacion desea realizar?:");
operacion = prompt("1: Suma, 2) Resta, 3) Multiplicar, 4) Dividir, 5) Potencia");
if(operacion == 1){
    let num1 = Number(prompt("Num1: "));
    let num2 = Number(prompt("Num2: "));
    let resultado = calculadora.sumar(num1,num2);
    document.write("Resultado: "+resultado);
} else if(operacion == 2){
    let num1 = Number(prompt("Num1: "));
    let num2 = Number(prompt("Num2: "));
    let resultado = calculadora.restar(num1,num2);
    document.write("Resultado: "+resultado);
} else if(operacion == 3){
    let num1 = Number(prompt("Num1: "));
    let num2 = Number(prompt("Num2: "));
    let resultado = calculadora.Multiplicar(num1,num2);
    document.write("Resultado: "+resultado);
} else if(operacion == 4){
    let num1 = Number(prompt("Num1: "));
    let num2 = Number(prompt("Num2: "));
    let resultado = calculadora.dividir(num1,num2);
    document.write("Resultado: "+resultado);
} else if(operacion == 5){
    let num1 = Number(prompt("Num1: "));
    let num2 = Number(prompt("exponente: "));
    let resultado = calculadora.potenciar(num1,num2);
    document.write("Resultado: "+resultado);
} else {
    document.write("Opcion no valida");
}