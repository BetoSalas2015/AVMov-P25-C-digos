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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id );
    if( empleado )
        callback(null, empleado ) ;
    else
        callback( `El Empleado con id ${ id } no existe` );
};

getEmpleado(4, (err, empleado) => {
    if(err) {
        return console.log(err);
    }
    console.log(empleado);
    
});

