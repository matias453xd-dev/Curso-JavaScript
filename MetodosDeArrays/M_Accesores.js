// Metodos accesores
let random = ["aeiou","100110","PEdro","Dado","Avion"];
document.write(random + "<br>");

// join() retorna una cadena de texto a partir de un array
let resultado = random.join();
document.write(resultado + "<br>");
document.write(resultado[0] + "<br>"); // a, no aeiou

// slice() devuelve una parte del array desde un elemento hasta el otro
resultado = random.slice(0,2);
document.write(resultado + "<br><br>"); // aeiou, 100110

// Metodos de repeticion

// Tanto filter() como forEach() recorren un array y aplican en cada elemento una funcion
random.filter(item => document.write(item + "<br>"));
resultado = random.filter(num => num == "Dado");
document.write(resultado + "<br>"); // Dado