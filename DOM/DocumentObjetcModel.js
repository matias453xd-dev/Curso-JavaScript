// Se refiere al documento completo con html, css, js, etc.

// Obtener un elemento del html por su id
parrafo = document.getElementById("parrafo");
document.write(parrafo + "<br>"); // Indica el tipo del elemento
// De tener mas de un elemento con el mismo id, hay que especificar el indice

// Devuelve el primer elemento que coincida
parrafo = document.querySelector(".pf");
document.write(parrafo + "<br>");

// Para seleccionar segun el id: #
// Para seleccionar segun la clase: .

// Metodos para manipular los valores de atributos

const rango = document.querySelector(".rango"); // Input de rango
// Cambiando el tipo del input
rango.setAttribute("type","text");

// tipo de un elemento
document.write(rango.getAttribute("type"));

// Atributos globales(Ahora se incluye css)
const titulo = document.querySelector(".titulo");
// contentEditable permite editar un elemento
titulo.setAttribute("contentEditable","true"); // Ahora se puede editar el titulo

titulo.setAttribute("dir","rtl"); // Indica la direccionalidad del texto, derecha a izquierda
titulo.setAttribute("title","jajajaxd"); // Ahora cuando se pase el mouse por encima del titulo mostrara: jajjajaxd