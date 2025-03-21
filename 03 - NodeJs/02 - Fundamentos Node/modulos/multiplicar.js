const fs = require('node:fs');

const crearArchivo = (base = 5, limite = 10) => {
    const promesa = new Promise( (resolve, reject) => {
        console.log("================================");
        console.log(`         Tabla del ${base}      `);
        console.log("================================");

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