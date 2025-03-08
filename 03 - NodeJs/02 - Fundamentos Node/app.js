import { crearArchivo } from './modulos/multiplicar.js'

console.clear();

let base = 3;

crearArchivo(base)
        .then( (nombreArchivo) => {console.log(nombreArchivo); })
        .catch( (err) => { console.log(err); });
    

