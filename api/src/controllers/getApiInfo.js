const axios = require('axios');
const { API_KEY } = process.env;

// Promesa:

const getApiInfo = () => {
   // const apiUrl = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) parece funcionar sin APIKEY
    const apiUrl = axios.get(`https://api.thedogapi.com/v1/breeds`)

        .then(res => res.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                heightMin: dog.height.metric.split(' - ')[0],
                heightMax: dog.height.metric.split(' - ')[1] ?
                    dog.height.metric.split(' - ')[1] :
                    Math.round(dog.height.metric.split(' - ')[0] * 1.1),
                weightMin: dog.weight.metric.split(' - ')[0] !== "NaN" ?
                    dog.weight.metric.split(' - ')[0] :
                    (dog.weight.metric.split(' - ')[1] ?
                        Math.round(dog.weight.metric.split(' - ')[1] * 0.6) :
                        '30'),//Math.round(dog.weight.imperial.split(' - ')[1] * 0.6 / 2.205).toString()),
                weightMax: dog.weight.metric.split(' - ')[1] ?
                    dog.weight.metric.split(' - ')[1] :
                    '39',//Math.round(parseInt(dog.weight.imperial.split(' - ')[1]) / 2.205).toString(),
                life_span: dog.life_span,
                temperaments: dog.temperament ? dog.temperament : null,
                image: dog.image.url,
                createdInDb: false
            }
        }));
    return apiUrl
}

module.exports = {
    getApiInfo,
}