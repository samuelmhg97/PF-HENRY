require('dotenv').config();
const {Sequelize} = require('sequelize')
const fs = require('fs');
const path = require('path');
const {DB_URI} = process.env;

const sequelize = new Sequelize(DB_URI, {
    dialect: 'postgresql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false }},
    logging: false, 
    native: false,
  });
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Movie } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Movie.belongsToMany(User, { through: 'MovieUser' });
User.belongsToMany(Movie, { through: 'MovieUser' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
