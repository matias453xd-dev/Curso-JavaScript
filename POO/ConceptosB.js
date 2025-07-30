// Definiendo una clase
class animal {
    // Atributos
    constructor(nombre, especie, edad){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        // Para colocar un salto de linea: <br>
        this.info = `Soy ${this.nombre}, tengo ${this.edad} años y soy de la especie de ${this.especie} <br>`;
    }
    // Metodos
    verInfo(){
        document.write("Saludozzzzzz <br>");
    }
    EmitirSonido(){
        // Se aplica el polimorfismo, ya que cada especie
        // tendrá su propio sonido con el mismo método
        if(this.especie == "Reptil"){
            document.write("zzzzzz <br>");
        } else if(this.especie == "Pez"){
            document.write("glugluglu <br>");
        } else {
            document.write("Especie no registrada <br>");
        }
    }
}

// Creando un objeto
let serpiente = new animal("Cobra","Reptil",5);
console.log(serpiente);
document.write(serpiente.info);
serpiente.verInfo();
serpiente.EmitirSonido();
let salmon = new animal("Salmon","Pez",1);
salmon.EmitirSonido();

// Herencia
class perro extends animal {
    // Se heredan los atributos
    constructor(nombre,especie,edad,raza){
        super(nombre,especie,edad);
        this.raza = raza;
    }

}
// No se puede tener un objeto con el mismo nombre
// que una clase
let doberman = new perro("Boby","Mamifero",4,"Doberman");
document.write(doberman.info);
doberman.EmitirSonido();
// NOTA
// Un metodo estatico es algo propio de una clase,
// no es necesario crear un objeto para utilizarlos
