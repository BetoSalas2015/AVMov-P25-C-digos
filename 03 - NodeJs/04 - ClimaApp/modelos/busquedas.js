const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {

    }

    async ciudad(lugar = '') {
        const consulta = axios.create({
            baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
            params: {
                q: 'Puebla',
                language: 'es',
                limit: 5,
                'access_token': process.env.MAPBOX_KEY
            }
        });
        const resp = await consulta.get();
        return resp.data.features.map( (ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.properties.full_address,
            lat: ubicacion.properties.coordinates.longitude,
            lon: ubicacion.properties.coordinates.latitude            
        }) );
    };

}

module.exports = Busquedas;