// En la consola se puede depurar y probar el codigo
// así como interactuar con el entorno de ejecucion

// ---FUNCIONES DE REGISTRO

// assert() se utiliza para verificar si una condicion es verdadera
console.assert(5 > 2); // Util para encontrar errores logicos

// clear() limpia la consola

// error() muestra un error
console.error("Que hiciste?, la pagina no carga");

// info(), es como el console.log(), muestra en consola un mensaje informativo
console.info("Buen trabajo");

// table() muestra una tabla en consola dado un array u objeto
console.table([2,3,4,2,1123,943]); // Muestra el indice y el valor

// ---FUNCIONES DE CONTEO

// count() muestra cuantas veces se ejecuta esta misma funcion
console.count();
console.count();
console.count();
// countResert() reinicia la cuenta

// FUNCIONES DE TEMPORIZACION

// time() crea un contador
console.time(); // Se puede ocupar para saber el tiempo que tarda en ejecutarse un codigo

// timeLog() muestra cuanto tiempo transcurrio desde que se creo el contador

// timeEnd() termina el contador

