class Telefono {
    constructor(color,peso,resolucion,camara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.celularEncendido = false;
        this.info = `El telefono es de color ${this.color}, pesa ${this.peso} gramos, tiene una resolución de ${this.resolucion} y una cámara de ${this.camara} megapíxeles. <br>`;
    }
    Prender(){
        if(this.celularEncendido == false){
            document.write("Encenciendo.... <br>");
            this.celularEncendido = true;
        } else {
            document.write("El telefono ya esta encendido");
        }
    }
    Apagar(){
        if(this.celularEncendido == true){
            document.write("Apagando.... <br>");
            this.celularEncendido = false;
        } else {
            document.write("El telefono ya esta apagado");
        }
    }
    Reiniciar(){
        document.write("Reiniciando, espere un momento.... <br>");
    }
    TomarFoto(){
        document.write("Foto tomada <br>");
    }
    Grabar(){
        document.write("Grabando... <br>");
    }
}
let xiaomi = new Telefono("Amarillo","200","1080p",48,6);
document.write(xiaomi.info);
xiaomi.Prender();
let samsung = new Telefono("Negro","180","720p",52,4);
document.write(samsung.info);
samsung.Grabar();
let iphone = new Telefono("Blanco","150","4K",64,8);
document.write(iphone.info);
iphone.Reiniciar();

// Segunda parte

class AltaGama extends Telefono {
    constructor(color,peso,resolucion,camara,ram, camaraExtra){
        super(color,peso,resolucion,camara,ram);
        this.camaraExtra = camaraExtra;
        this.info = `El telefono es de color ${this.color}, pesa ${this.peso} gramos, tiene una resolución de ${this.resolucion}, una cámara de ${this.camara} megapíxeles y camara lenta de ${this.camaraExtra}<br>`;
    }
    GrabarCamaraLenta(){
        document.write(`Grabando en camara lenta a ${this.camaraExtra}p <br>`);
    }
    ReconocimientoFacial(){
        document.write("Iniciando el reconocimiento faciel, coloque su cara <br>");
    }
}
let iphone16pro = new AltaGama("negro","170","4K",64,8,240);
document.write(iphone16pro.info);
iphone16pro.GrabarCamaraLenta();
iphone16pro.ReconocimientoFacial();

// Tercera parte
class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.info = `La app tiene ${this.descargas} descargas, una puntuación de ${this.puntuacion} estrellas y pesa ${this.peso} MB. <br>`;
    }
    Descargar(){
        if(this.instalada == false){
            document.write("Descargando la app... <br>");
            this.instalada = true;
        } else {
            document.write("La app ya está instalada <br>");
        }   
    }
    Desinstalar(){
        if(this.instalada == true){
            document.write("Desinstalando la app... <br>");
            this.instalada = false;
        } else {
            document.write("La app ya está desinstalada <br>");
        }
    }
}
let angryBirds = new App("100M","4.5","200");
document.write(angryBirds.info);
angryBirds.Descargar();
angryBirds.Desinstalar();