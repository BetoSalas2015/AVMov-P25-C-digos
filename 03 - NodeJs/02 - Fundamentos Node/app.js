const  {crearArchivo} = require ('./modulos/multiplicar.js');
const argv = require ("yargs")
             .option('b',{
                alias: 'base',
                demandOption: true,
                deafult: 5,
                describe: 'Base de la tabla de multiplicar',
                type: 'number'
             }).option('l', {
                alias: 'limite',
                demandOption: true,
                default: 10,
                describe: 'Numero limite para generar la tabla', 
                type: 'number'
             })
             .check( (argv, option) => {
                if (isNaN(argv.base)) {
                    throw 'El arguento debe ser un numero';    
                }
                return true;
             })
             .argv;

console.clear();
console.log(process.argv);
console.log(argv);

const base = argv.base;
const limite =  argv.limite;

crearArchivo(base, limite)
        .then( (nombreArchivo) => {console.log(nombreArchivo); })
        .catch( (err) => { console.log(err); });
        
    

