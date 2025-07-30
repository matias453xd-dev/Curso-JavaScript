let numero = 10;

// numero /= 5; // 2
// numero %= 2 // resto = 0
// numero ^^= 2 // 10^2 = 100

document.writeln(numero); 

// CONCATENACION

// Se pueden definir variables sin el let, const o var
// y se consideran variables globales

pregunta = "Como estas? ";
respuesta = "Bien, tu como estas?";
frase = pregunta + respuesta; // Concatenar strings

document.writeln(frase);

numero1 = 3;
numero2 = 2;

// numCom = numero1 + numero2; // 5
numCom = "" + numero1 + numero2; // 32, ya que se detecta como string
document.write(numCom);

// Mejor forma de concatenar strings

nombre = "Matias";
presentacion = `Muy buenas criaturitas del señor, soy ${nombre}`; 
document.write(presentacion); 