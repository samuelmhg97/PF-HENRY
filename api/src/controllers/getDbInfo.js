const {Breed, Temperament} = require('../db');

const getDbInfo = async () => {
    return await Breed.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            throught: {
                attributes: [],
            },
        }
    })
};

module.exports = {
    getDbInfo,
}