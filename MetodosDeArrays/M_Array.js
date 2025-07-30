// Metodos de array
let nombres = ["Matias", "Felipe", "Rafael"];
document.write(nombres+"<br>");

// pop() elimina el ultimo elemento y lo muestra
let resultado = nombres.pop();
document.write(nombres + "<br>"); // Matias,Felipe
// shift() elimina el primero

// push() agrega un elemento al final del array y retorna el numero de elementos
resultado = nombres.push("Juan");
document.write(nombres + "<br>"); 
document.write(resultado + "<br>"); // Muestra los elementos: 3

// reverse() invierte el orden de un array
resultado = nombres.reverse();
document.write(resultado + "<br>");

// unshift() agrega varios elementos al inicio de un array
nombres.unshift("Alexander","Patrolo");
document.write(nombres + "<br>");

// sort() ordena los elementos y lo retorna
nombres.sort();
document.write(nombres + "<br>");

// splice() elimina elementos existentes y/o agregando otros nuevos
nombres.splice(1,2, "Roberto"); // En el indice 1 eliminara los 2 elementos siguientes y se agrega a "Roberto"
document.write(nombres + "<br>"); // Se elimina a Felipe y a Juan para agregar a Roberto

