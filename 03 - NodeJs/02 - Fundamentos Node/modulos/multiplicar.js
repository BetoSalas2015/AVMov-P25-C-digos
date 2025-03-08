import { writeFile } from 'node:fs'

const crearArchivo = (base = 5) => {
    const promesa = new Promise( (resolve, reject) => {
        console.log("================================");
        console.log(`         Tabla del ${base}      `);
        console.log("================================");

        let salida = "";

        for (let index = 1; index < 10; index++) {
            salida += `${base} * ${index} = ${ index * base}\n`;  
        }

        console.log(salida);
        writeFile(`Tabla-${base}.txt`, salida, (err) => {
            if (err) reject(err);
            resolve(`Archivo Tabla-${base}.txt creado`);
        });
    } );
    return promesa;
};

export {
    crearArchivo
}