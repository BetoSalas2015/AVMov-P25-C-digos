//  Prototype

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.getFullName = function() {
    return this.nombre + " " + this.apellido;
}

var juan =  Persona("Juanito", "Pérez");
var pedro = new Persona("Pedrito", "López");

var test = {};

console.log(juan);
console.log(pedro);
console.log(test);


console.log(pedro.getFullName());

// ! -----  Herencia de Prototipo puro
var a = 3;
console.log( typeof a);

var b = "Saludos Programas!!!!";
console.log( typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log( typeof d);
console.log( Object.prototype.toString.call(d) );

var e = new Persona("roberto", "salazar");
console.log( typeof e );
console.log(e instanceof  Persona);

console.log( typeof undefined);
console.log( typeof null );




