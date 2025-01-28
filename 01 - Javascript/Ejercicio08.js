// * Arreglos

var arreglo = new Array();

arreglo[0] = "Saludos Programas!!!!"

var arreglo2 = [
    1,
    true,
    "Saludos",
    { nombre: "Roberto" }
];

console.log(arreglo);
console.log(arreglo2);

// !--------------------------------------------------

function argumentTest(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
    console.log(arguments);
    
    
}

argumentTest();
argumentTest("uno");
argumentTest("uno", "dos", "tres");