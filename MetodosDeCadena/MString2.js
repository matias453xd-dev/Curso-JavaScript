let cadena = "aeiou la vaca ERES tu";
let cadena2 = "";

// split() convierte una cadena en array, separando cada elemento segun el parametro que se le de
resultado = cadena.split(" ");
document.write(resultado+"<br>");
document.write(resultado[0]+resultado[2]+"<br>"); // aeiouvaca

// substring() crear un nuevo string dado el indice inicial y final de otro string
resultado = cadena.substring(0,3); // aei
document.write(resultado+"<br>");

// toLowerCase() convierte a minuscula
resultado = cadena.toLocaleLowerCase();
document.write(resultado+"<br>");
// toUpperCase() es lo contrario

// toString() convierte un valor a string

// trim() elimina los espacios en blanco al principio y al final de una cadena
resultado = cadena.trim();
document.write(resultado+"<br>");