const fs = require('fs');
const axios = require('axios');

class Busquedas {
    historial = [];
    dbpath = './db/database.json';

    constructor() {

    }

    async ciudad(lugar = '') {
        const consulta = axios.create({
            baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
            params: {
                q: lugar,
                language: 'es',
                limit: 5,
                'access_token': process.env.MAPBOX_KEY
            }
        });
        const resp = await consulta.get();
        return resp.data.features.map( (ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.properties.full_address,
            lon: ubicacion.properties.coordinates.longitude,
            lat: ubicacion.properties.coordinates.latitude            
        }) );
    };

    climaCiudad = async(lat, lon) => {
        const consulta = axios.create({
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            params: {
                'lat': lat,
                'lon': lon,
                'appid': process.env.OPENWEATHER_KEY,
                'units': 'metric',
                'lang': 'es'
            }
        });
        const resp = await consulta.get();
        return {
            desc: resp.data.weather[0].description,
            temp: resp.data.main.temp,
            real: resp.data.main.feels_like,
            min: resp.data.main.temp_min,
            max: resp.data.main.temp_max
        }
    };

    guardaBúsquedas = (lugar = '') => {
        if (this.historial.includes(lugar)) {
            return;
        }
        this.historial.unshift(lugar);
        this.historial = this.historial.slice(0,5);
    };

    guardaBase = () => {
        const basedatos = {
            'historial': this.historial
        };
        try {
            fs.writeFileSync(this.dbpath, JSON.stringify(basedatos));
        } catch ( error) {
            throw error;
        }
    };

    cargaBase = () => {
        if ( !fs.existsSync(this.dbpath)) {
            return null;
        }
        const consultas = fs.readFileSync(this.dbpath, {encoding: 'utf-8'} );
        const hist = JSON.parse(consultas);
        this.historial = hist.historial;
    };

}

module.exports = Busquedas;