console.log('Hola');

var nombre

nombre = 'Andres';

var  primeraLetra = nombre.charAt(0);


console.log('concatenacion es6', `${nombre} concatenado :D`);

var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve())



console.log(`Fui a ver si llovio ${contador} veces`);


function Persona (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
var andres = new Persona('Andres', 'Gomez');