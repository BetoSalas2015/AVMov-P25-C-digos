interface Nombre {
    nombre: string;
    apellido: string;
}

class Persona {
    private nombreCompleto: Nombre;
    private edad: number;
    private salario: number;

    public constructor(nombre: Nombre, edad: number = 25, salario?: number) {
        this.nombreCompleto = nombre;
        this.edad = edad;
        if (salario) {
            this.salario = salario
        } else {
            this.salario = 0.0;
        }
        
    }

    getNombre(): string {
        return this.nombreCompleto.nombre;
    }

    setNombre(nombre: string): void {
        this.nombreCompleto.nombre = nombre;
    }

    public get Edad(): number {
        return this.edad;
    }

    public set Edad(Edad : number) {
        this.edad =  Edad;
    }

    public toString(): string {
        return "Nombre: " + this.nombreCompleto.nombre + ", edad: " + this.edad;
    }
}

var Roberto = new Persona( { nombre: "Roberto", apellido: "Salazar" });
var Juan = new Persona({nombre: "Juan", apellido: "Pérez"}, 15);
var Pedro = new Persona({nombre:"Pedro", apellido: "lopez"}, 50, 400.00)

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


