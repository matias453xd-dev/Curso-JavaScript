// En este caso se tiene un h2 y un p(parrafo)
// que son "hijos" del contenedor div
// se pueden acceder a estos atravez del contenedor

const contenedor = document.querySelector(".contenedor");

const primerhijo = contenedor.firstElementChild; // h2
const ultimohijo = contenedor.lastElementChild; // p
const hijos = contenedor.childNodes; // Devuelve todos los nodos hijos del contenedor
console.log(primerhijo);
console.log(ultimohijo);
// console.log(hijos);
for(hijo of hijos){
    console.log(hijo);
}

// METODOS DE CHILD

// Creando un parrafo y un h2
const parrafo = document.createElement("P").innerHTML = "Parrafo jsjaaja";
const h2 = document.createElement("H2");
// Colocandole info
h2.innerHTML = "Titulo pequeño";

h2_antiguo = document.querySelector(".h2_antiguo");
// Cambiando el h2 antiguo por el que fue creado recien
contenedor.replaceChild(h2,h2_antiguo);

// Para eliminar un elemento se usa el remove.child()
// contenedor.removeChild(h2);

// hasChildNodes() sirve para verificar si un elemento tiene hijos
let respuesta = contenedor.hasChildNodes();

if(respuesta) {
    document.write("El elemento tiene hijos <br>");
} else {
    document.write("El elemento NO tiene hijos <br>");
}

respuesta = h2.parentElement;
console.log(respuesta + "<br>"); // El elemento padre es un div

// METODOS DE HERMANOS

console.log(h2.nextElementSibling); // Hemano por debajo del h2, #h3
// console.log(h2.previousElementSibling); //El que esta por encima

