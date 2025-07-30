// Metodos
let cadena = "lorem cadena de texto";
let cadena2 = "lorem";

// concat(), concatena 2 o mas cadenas
resultado = cadena.concat(" Seguido....");
document.writeln(resultado+"<br>");

// startWith(), devuelve un booleano si una cadena comienza con otra
resultado2 = cadena.startsWith(cadena2); // true
document.writeln(resultado2+"<br>");

// incluedes(), si una cadena se encuentra dentro de otra devuelve true
resultado2 = cadena.includes(cadena2); // true
document.writeln(resultado2+"<br>");

// indexOf() devuelve el indice donde se encuentra la primera letra que le pasamos como parametro
resultado2 = cadena.indexOf("a"); // 7
document.writeln(resultado2+"<br>");

// padStart() sirve para llenar una cadena hasta un largo definido con una letra, palabra, etc, que uno quiera
resultado2 = cadena.padStart(24,"1"); // 111lorem cadena de texto
document.writeln(resultado2+"<br>");
// padEnd() funciona al revez

// repeat() devuelve la misma cadena repetida
resultado2 = cadena.repeat(2); // lorem cadena de textolorem cadena de texto
document.writeln(resultado2+"<br>");
