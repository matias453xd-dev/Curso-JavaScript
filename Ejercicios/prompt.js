
let cantidad = prompt("Cuantos alumnos son?: ");
let alumnos = [];

for(i = 0; i < cantidad; i++){
    alumnos[i] = [prompt("Nombre: "+(i+1)),i];
}
const TomarAsistencia = (nombre, p) =>{
    let presencia = prompt(nombre+", asistencia p/a: ");
    if(presencia == "p" || presencia == "P"){
        alumnos[p][1]++;
    }
} 

for(i = 0; i < 10; i++){
    for(alumno in alumnos){
        TomarAsistencia(alumnos[alumno][0],alumno);
    }
}
for(alumno in alumnos){
    document.write(alumnos[alumno][0]+" asistencia: "+alumnos[alumno][1]+"\n");
    if(alumnos[alumno][1] < 6){
        document.write("Reprobado por inasistencia \n");
    } else {
        document.write("Aprobado \n");
    }
}