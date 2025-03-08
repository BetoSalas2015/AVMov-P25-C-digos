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

let id = 3;

const getEmpleado = (id) => {
    return promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        (empleado) ? resolve( empleado ) : reject( `El Empleado con id ${ id } no existe` );
 
        } ); // de la promesa
};

const getSalario = (id) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (e) => e.id === id )?.salario;
        (salario) ?  resolve(salario) :reject(`El salario con id ${ id } no existe.`);
    } );
};

getEmpleado(id)
    .then( (empleado) => { 
        emp =  empleado;
        return getSalario(id);} ).then( (salario) => { 
            console.log(`El empleado ${ emp } tiene un salario de ${ salario }` );})
        .catch( (err) => { console.log(err); 
    } ); 
    
const getInfoUsuario = async(id) => {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${ emp } tiene un salario de ${ salario }`;
};

getInfoUsuario(id).then( msg => console.log(msg)).catch( (err) => { console.log(err); });

