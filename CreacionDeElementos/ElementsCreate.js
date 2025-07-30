
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); //Creando una elemento lista
const textItem = document.createTextNode("Item de una lista"); //Creando un nodo
// Agregando un nodo(texto) a un elemento de lista
item.appendChild(textItem);
// Agregando la lista al contenedor
contenedor.appendChild(item);

// Otra forma de hacer lo mismo, consumiendo menos recursos
const fragmento = document.createDocumentFragment();
fragmento.appendChild(item);
contenedor.appendChild(fragmento);

document.write(item);
document.write(textItem);
console.log(item);
console.log(contenedor);
