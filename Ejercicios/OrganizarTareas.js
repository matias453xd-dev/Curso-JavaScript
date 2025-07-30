// Cada materia debe tener asistencia/promedio/trabajos practicos
let materias = {
    fisica: [90,6.5,5,"Fisica"],
    Matematicas: [87,5.3,7,"Matematicas"],
    Quimica: [76,4.9,4,"Quimica"],
    Programacion: [97,6.7,3,"Programacion"],
    Ingles: [65,4.5,4,"Ingles"],
}
const aprobado = () => {
    for(i in materias){
        let asist = materias[i][0];
        let prom = materias[i][1];
        let trabajos = materias[i][2];
        if(asist >= 75){
            if(prom >= 5.0){
                console.log(materias[i][3]); // Muetra la materia
                console.log("%c  Aprobado","color:green");
            } else {
                console.log(materias[i][3]);
                console.log("%c  Examen","color:purple");
            }
            
        } else if(trabajos > 4){
            console.log(materias[i][3]);
            console.log("%c  Examen","color:purple");
        } else {
            console.log(materias[i][3]);
            console.log("%c  Examen","color:red");
        }
    }
}
aprobado();

// Organizar horario
let trabajo = 240;
let estudio = 100;
let tp = 100;
let homework = 50;
let descanso = 15;
let semana = Number(0);
for(var i = 1;i< 16;i++){
    if(i % 7 == 0 || i == 1){
        console.groupEnd();
        semana+=1;
        console.group("Semana "+(semana));
    }
    console.group("Dia "+i);
    console.log(trabajo);
    console.log(estudio);
    console.log(descanso);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
}