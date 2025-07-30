
const input = document.querySelector(".input_normal"); // Obtiene al input de texto

document.write(input.className+"<br>"); // Muestra el nombre de la clase
document.write(input.value+"<br>"); // 123
document.write(input.type+"<br>"); // text
input.type = "file"; // Cambiar el tipo
input.accept = "image/png"; // Ahora solo va a aceptar imagenes png
input.type = "text";

// minlength: Establece la cantidad minima de caracteres que puede tener un input
// input.setAttribute("minlength","8");

input.placeholder = "lolololol"; // Como ya tiene un atributo value, el placeholder no aparecerá

// required, hace que un campo sea obligatorio
input.required = "required";