// callback-Hell
const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Jorge"
    },
    {
        id: 3,
        nombre: "Pedro"
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1200
    }
];

let id = 20;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
    if( empleado )
        callback(null, empleado ) ;
    else
        callback( `El Empleado con id ${ id } no existe` );
};



const getSalario = (id, callback) => {
    const salario = salarios.find( (e) => e.id === id )?.salario;
    if(salario) {
        callback(null, salario);
    } else {
        callback(`El salario con id ${ id } no existe.`)
    }
};

getEmpleado(id, (err, empleado) => {
    if(err) {
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
    if (err) {
        return console.log(`El empleado ${empleado} no tien un salario `);
    }
    console.log(`El empleado ${empleado} gana ${salario}.`);
    
} );    //  llamada getSalario()
    
});     // llmada a get empleado()

