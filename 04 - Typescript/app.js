"use strict";
class Persona {
    constructor(nombre, edad = 25, salario) {
        this.nombreCompleto = nombre;
        this.edad = edad;
        if (salario) {
            this.salario = salario;
        }
        else {
            this.salario = 0.0;
        }
    }
    getNombre() {
        return this.nombreCompleto.nombre;
    }
    setNombre(nombre) {
        this.nombreCompleto.nombre = nombre;
    }
    get Edad() {
        return this.edad;
    }
    set Edad(Edad) {
        this.edad = Edad;
    }
    toString() {
        return "Nombre: " + this.nombreCompleto.nombre + ", edad: " + this.edad;
    }
}
var Roberto = new Persona({ nombre: "Roberto", apellido: "Salazar" });
var Juan = new Persona({ nombre: "Juan", apellido: "Pérez" }, 15);
var Pedro = new Persona({ nombre: "Pedro", apellido: "lopez" }, 50, 400.00);
console.log(Roberto);
console.log(Juan);
console.log(Pedro);
var valor1 = "Hola";
if (true) {
    var valor1 = "Mundo";
}
let valor2 = "Hola";
if (true) {
    let valor2 = "Mundo";
}
