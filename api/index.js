const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const loadRoles = require("./src/helpers/loadRoles.js"); //Agrega los roles cada vez que se inicializa la base de datos
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  loadRoles(); //Ejecuta para agregar los roles a la DB
  server.listen(process.env.PORT || 3001, () => {
    console.log("listening at port " + process.env.PORT); // eslint-disable-line no-console
  });
});
