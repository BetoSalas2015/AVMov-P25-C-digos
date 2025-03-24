const fs = require('node:fs');
const colors =  require('colors');

const crearArchivo = (base = 5, limite = 10) => {
    const promesa = new Promise( (resolve, reject) => {
        console.log("================================".green);
        console.log(`         Tabla del ${base}      `.green);
        console.log("================================".green);

        let salida = "";

        for (let index = 1; index <= limite; index++) {
            salida += `${base} * ${index} = ${ index * base}\n`;  
        }

        console.log(salida);
        fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
            if (err) reject(err);
            resolve(`Archivo Tabla-${base}.txt creado`);
        });
    } );
    return promesa;
};

module.exports = {
    crearArchivo
}