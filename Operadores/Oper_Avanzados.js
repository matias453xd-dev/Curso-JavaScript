let num1 = 23;
let num2 = 54;
let num3 = "54";

// Comparar si dos elementos no son iguales
let comp = num1 !== num2; //true

// Comparar si son estrictamente identicos(mismo tipo y valor)
let comp2 = num2 === num3; //false
let comp3 = num2 == num3; //true


console.log(comp);
console.log(comp2);
console.log(comp3);

// Operadores lógicos

op = (43 < 32) || ((true || 4 < 6) || (true && "Manzana" == "Pera"));
document.write(op); // true
