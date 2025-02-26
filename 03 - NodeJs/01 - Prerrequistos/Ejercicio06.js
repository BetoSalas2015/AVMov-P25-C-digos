// callbacks

let getUsuarioById = (id, callback) => {
    let usuario = {
        id,
        nombre: "Roberto"
    }
    setTimeout( () => {
        callback(usuario);}, 4000);
};

getUsuarioById(100, (usuario) => { 
    console.log(usuario.nombre);
    console.log(usuario.id);
    
} );