// Dada una materia se obtienen los alumnos y el profesor
const obtenerInfo = (materia) => {
    materias = {
        fisica: ["Juan", "Leo", "Parra"],
        Programacion: ["Felipe", "Agustin", "Renato"],
        Quimica: ["Daniela", "Sofia", "Andres"],
        Matematicas: ["Matias", "Maria", "Gustavo"],
    }
    if(materias[materia] !== undefined){
        return materias[materia];
    } else {
        return false
    }
}
let informacion = obtenerInfo("fisica");
if(informacion !== false){
    document.write("Alumnos presentes: "+informacion+ "<br>");
    document.write("El profesor es: "+informacion[0]+"<br>")
} else {
    document.write("La materia no existe <br>");
}
