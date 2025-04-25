"use strict";
var nombre = "Roberto Salazar Márquez";
var edad = 10;
var programador = true;
var lenguajes = ["Java", "C", "ECAMScript"];
var pareja = ["Edad", 34];
var meses;
(function (meses) {
    meses[meses["Enero"] = 0] = "Enero";
    meses[meses["Febrero"] = 1] = "Febrero";
    meses[meses["Marzo"] = 2] = "Marzo";
    meses[meses["Abril"] = 3] = "Abril";
})(meses || (meses = {}));
;
var calendario = meses.Abril;
var nada = undefined;
var temporal = edad;
var Undefined = undefined;
console.log(nombre + ", Edad: " + edad + ", porgrama en " + lenguajes[2]);
