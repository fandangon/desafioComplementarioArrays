//En este proceso magico daremos vida a un personaje...
//Puedes crear el que quieras, humano, hada, gnomo, ogro..LO QUE QUIERAS!
class Personaje{
    constructor(genero, estatura, peso, edad, nombre){
        this.genero = genero,
        this.estatura = estatura,
        this.peso = peso,
        this.edad = edad,
        this.nombre = nombre
    }
    mostrarPersonaje(){
        console.log(`Información del Personaje creado: 
                    Genero Tipo: ${this.genero}
                    Estatura: ${this.estatura}cm
                    Peso: ${this.peso}kg
                    Edad: ${this.edad} años
                    Nombre: ${this.nombre}`);
    }
}
let personaje1 = new Personaje("Hada", 1, 2, 2000, "Cleo");
let personaje2 = new Personaje("Duende", 1, 5, 199, "Leprechaun");
let personaje3 = new Personaje("Ogro", 300, 120, 1000, "Shrek");
//Array vacio, se llenara a medida que el usuario vaya creando personajes.
const bibliotecaDePersonajes = [];
bibliotecaDePersonajes.push(personaje1, personaje2, personaje3);

//Comienzo de las funciones del menú

//Crear un personaje
function crearPersonaje(){
    alert("Vamos a crear tu personaje");
    let suGenero = prompt("Ingrese el genero que desea");
    let suEstatura = parseInt(prompt("Ingrese la estatura de su personaje"));
    let suPeso = parseInt(prompt("Ingrese el peso de su personaje"));
    let suEdad = parseInt(prompt("Ingrese la edad de su personaje"));
    let suNombre = prompt("Ingrese el nombre de su personaje");
    
    let nuevoPersonaje = new Personaje(suGenero, suEstatura, suPeso, suEdad, suNombre);
    bibliotecaDePersonajes.push(nuevoPersonaje);
}
//Ver personajes creados en el array
function verPersonajes(array){
    alert("Los personajes se listarán en la consola");
    console.log("LISTA DE PERSONAJES");
    array.forEach((Personaje) => {
        Personaje.mostrarPersonaje();        
    });
}
//Opciones del Menú
function Opcion(){
    let opcion = parseInt(prompt(`Selecciona la opción que desea realizar:
                    1). Crear Personaje
                    2). Ver Lista de Personajes
                    0). Salir
                    `));
    menu(opcion);
}

function menu(SelectOption){
    switch(SelectOption){
        case 0:
            salir = true;
            alert("Vuelve pronto para seguir creando personajes");
            break;
        case 1:
            crearPersonaje(bibliotecaDePersonajes);
            break;
        case 2:
            verPersonajes(bibliotecaDePersonajes);
            break;
            default:
                alert(`La opción seleccionado es incorrecta`);
    }
}
let salir;
while(salir != true){
    Opcion();
}