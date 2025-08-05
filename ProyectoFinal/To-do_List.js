// Aplicacion web que permitira:
// Agregar tareas
// Marcar tareas como completadas
// Eliminar tareas
// Guardar tareas en el navegador (usando LocalStorage)

// Contenedor principal
const container = document.querySelector(".flex-container");

// Contador de tareas pendientes y tareas completadas
let tareasPendientes = 0;
let tareasCompletadas = 0;
const divTareas = document.createElement("DIV");
divTareas.classList.add("task-container");

const pendiente = document.createElement("P");
pendiente.textContent = "Tareas pendientes: "+tareasPendientes;
const completado = document.createElement("P");
completado.textContent = "Tareas Completadas: "+tareasCompletadas;

divTareas.appendChild(pendiente);
divTareas.appendChild(completado);
// Se agregan los contadores de tareas al div principal
container.appendChild(divTareas);

// Funcion para actualizar los contadores
function actualizarContadores() {
    pendiente.textContent = "Tareas pendientes: " + tareasPendientes;
    completado.textContent = "Tareas Completadas: " + tareasCompletadas;
}

// Funcion que realizara el boton guardar
function clickGuardar(){
    console.log("Tarea guardada correctamente");
    // Se creara un div con el texto de la tarea, un boton para tachar y uno para eliminar
    // input de texto
    const inputText = document.getElementById("inputText");
    const texto = inputText.value; // String
    const textNodo = document.createElement("span");
    textNodo.classList.add("textNodo");
    textNodo.textContent = texto; // Se guarda el texto en el span

    // Boton tachar
    const tachar = document.createElement("BUTTON");
    tachar.textContent = "Tachar";
    tachar.classList.add("tachar");
    // Funcionalidad
    tachar.onclick = function() {
    const textNodo = this.parentElement.querySelector(".textNodo");
    if (textNodo.style.textDecoration === "line-through") {
        textNodo.style.textDecoration = "none";
        tareasCompletadas -= 1;
        tareasPendientes += 1;
    } else {
        textNodo.style.textDecoration = "line-through";
        tareasCompletadas += 1;
        tareasPendientes -= 1;
    }
    actualizarContadores();
    };

    // Boton borrar
    const borrar = document.createElement("BUTTON");
    borrar.textContent = "Borrar";
    borrar.classList.add("borrar");
    // Funcionalidad
    borrar.onclick = function() {
        // Tarea va a guardar una referencia al flex-item para poder eliminarlo
        const tarea = this.parentElement;
        // Solo se restara si la tarea no esta tachada (ya que sino se restara 2 veces, puede quedar en negativo)
        if(textNodo.style.textDecoration === "line-through"){
            actualizarContadores();
        } else {
            tareasPendientes -= 1;
            actualizarContadores();
        }
        // Animacion de borrado
        tarea.classList.add("fade-out") //Nombre de la animacion
        setTimeout(() => {
            tarea.remove();
            this.parentElement.remove();
        }, 200) // El navegador esperará 200 milisegundos antes de eliminar el elemento
    }
    


    // Se agregan ambos botones a un div
    const flex_item = document.createElement("DIV");
    flex_item.classList.add("flex-item");
    // ----Animacion de guardado
    const save = flex_item;
    save.classList.add("save")
    setTimeout(() => {

    },300)
    // ----Animacion de guardado
    flex_item.appendChild(textNodo);
    flex_item.appendChild(tachar);
    flex_item.appendChild(borrar);

    // Se agregan al div principal
    container.appendChild(flex_item);

    // Aumenta en 1 las tareas pendientes
    tareasPendientes += 1;
    actualizarContadores();
    // Limpiando el input de texto
    inputText.value = "";
    
}

// Se selecciona el boton guardar y se vincula con el evento (funcion)
const guardar = document.getElementById("guardar");
guardar.onclick = clickGuardar;

// La funcion clickGuardar tambien se ejecutara al precionar enter
const inputText = document.getElementById("inputText"); // Se obtiene la entrada de texto
inputText.addEventListener("keydown", function(event) { // Se le agrega un evento
    if (event.key === "Enter") {
        clickGuardar();
    }
});

// Funcionalidad del boton de borrar todo
const BorrarTodo = document.getElementById("borrar-todo");
BorrarTodo.onclick = function(){
    // Se juntan todas las tareas
    const tareas = document.querySelectorAll(".flex-item");
    tareas.forEach(tarea => tarea.remove());
    tareasPendientes = 0;
    // tareasCompletadas = 0;
    actualizarContadores();
}

// -------Funcionalidad del apartado de ajustes
const ajustes = document.querySelector(".ajustes");
const fondo = document.getElementById("color");
const listaColores = document.getElementById("lista-colores");

ajustes.onclick = function(){
    // Hacer visible el menu
    if(menu.style.display == "none"){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        if(listaColores.style.display == "flex"){
            listaColores.style.display = "none";
        }
    }
}
// Con esto se podra cerrar haciendo click fuera del menu
document.addEventListener('click', function(e) {
    if (!ajustes.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
        listaColores.style.display = "none";
    }
});

fondo.onclick = function(){
    // Hacer visible las opciones de color
     if(listaColores.style.display == "none"){
        listaColores.style.display = "flex";
    } else {
        listaColores.style.display = "none";
    }
}
// Cambio de fondo
function CambioDeColor(ClassColor){
    const body = document.querySelector("body");
    const contenedor = document.querySelector(".flex-container");
    const tareas = document.querySelectorAll(".flex-item");
    const BorrarTodo = document.getElementById("borrar-todo");
    if(ClassColor == "rojo"){
        const rojoContenedor = getComputedStyle(document.body).getPropertyValue('--rojo-fondo');
        const rojoTareas = getComputedStyle(document.body).getPropertyValue('--rojo-tareas');

        body.style.backgroundColor = "beige";
        contenedor.style.backgroundColor = rojoContenedor;
        tareas.style.backgroundColor = rojoTareas;
        BorrarTodo.style.backgroundColor = rgb(235, 205, 37);
    } else if(ClassColor == "azul"){

    } else {

    }
}
// Botones de cambio de fondo
const botonRojo = document.querySelector(".rojo");
botonRojo.onclick = function(){
    CambioDeColor("rojo");
}

