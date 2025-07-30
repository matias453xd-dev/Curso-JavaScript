// Modificar las propiedades de un elemento usando style

const titulo = document.querySelector(".titulo");
titulo.style.color = "#48e";
titulo.style.backgroundColor = "#eee";
titulo.style.padding = "30px";

// Agregando contenido a la clase de un elemento
titulo.classList.add("GIGANTE"); // class = titulo GIGANTE

// Verifica el contenido de una clase
let valor = titulo.classList.contains("GIGANTE");

if(valor){
    document.write("La clase existe <br>");
} else {
    document.write("La clase NO existe <br>");
}

// Obtencion y modificacion
const subTitulo = document.querySelector(".sub_titulo");

// Devuelve el contenido
let resultado = subTitulo.textContent;
document.writeln(resultado);
// otro metodo que cumple la misma funcion es: innerHTML y outerHTML
// que muestran el contenido completo, incluyendo las etiquetas
resultado = subTitulo.outerHTML;
console.log(resultado);