// * Arreglos

/*var arreglo = new Array();

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
argumentTest("uno", "dos", "tres");*/

var list = [1,2,3,4,5];

console.log(list.toString());
console.log(list.join("-"));
console.log(list.concat(6,7,8));
console.log(list.slice(2,3));
console.log(list.splice(2,1,"dos"));

var your_drink = "soda";
var reverse = function(s) {
    return s.split("").reverse().join("");
}

var bartender = { 
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference) {
        return preference + ".secret Word: " + this.str2 + this.str3 + this.str1;
    }
};

bartender.request(your_drink);








