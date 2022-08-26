const { Router } = require("express");
const axios = require("axios");
const users = require("./users.js");
const { Breed, Temperament } = require("../db");
require("dotenv").config();

const { getAllDogs } = require("../controllers/getAllDogs");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Agrega el enrutado de /users
router.use("/users", users);

//Esta sería la información para el index.js modularizando las rutas//
const MovieRouter = require("./movie.js");
const RatingRouter = require("./rating.js");
const ProductRouter = require("./product.js");
router.use("/movies", MovieRouter);
router.use("/ratings", RatingRouter);
router.use("/products", ProductRouter);


router.get("/movies", async (req, res, next) => {
  try {
    const name = req.query.name;
    let allDogs = await getAllDogs();
    if (name) {
      let dogName = await allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.send([
            {
              name: `Apologies, the breed ${name} is not in our database.`, // ey macho, no tenemos esa raza de perro
              id: "",
              temperaments: ["If you want, you can add it to the database."], // podes agregarlo si queres
            },
          ]);
    } else {
      res.status(200).send(allDogs);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:breedId", async (req, res, next) => {
  try {
    const { breedId } = req.params;
    const allbreeds = await getAllDogs();
    if (breedId) {
      let breed = await allbreeds.filter((dog) => dog.id == breedId);
      breed.length
        ? res.status(200).json(breed)
        : res
            .status(404)
            .send(`Apologies, the ID ${breedId} is not in our database`); // ehameeeo, en el ID ${breedId} no hay nada
    }
  } catch (e) {
    res.send(e);
  }
});

router.get("/users", async (_req, res) => {
  // let infoApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  try {
    let infoApi = await axios(`https://api.thedogapi.com/v1/breeds`);
    let tempsRepeated = infoApi.data.map((dog) => dog.temperament).toString();
    tempsRepeated = await tempsRepeated.split(",");
    const tempsConEspacio = await tempsRepeated.map((dog) => {
      if (dog[0] == " ") {
        return dog.split("");
      }
      return dog;
    });
    const tempsSinEspacio = await tempsConEspacio.map((dog) => {
      if (Array.isArray(dog)) {
        dog.shift();
        return dog.join("");
      }
      return dog;
    });

    await tempsSinEspacio.forEach((dog) => {
      if (dog != "") {
        Temperament.findOrCreate({
          where: {
            name: dog,
          },
        });
      }
    });
    const allTemps = await Temperament.findAll();
    res.status(200).send(allTemps);
  } catch (e) {
    res.send(e);
  }
});

router.post("/dogs", async (req, res) => {
  try {
    let {
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,
      image,
      temperaments,
    } = req.body;
    if (
      name == "" ||
      heightMin == "" ||
      heightMax == "" ||
      weightMin == "" ||
      weightMax == ""
    ) {
      throw new Error("Name, height and weight are required");
    }
    let breedCreated = await Breed.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span: life_span + " years",
      image,
    });
    let temperamentDB = await Temperament.findAll({
      where: {
        name: temperaments,
      },
    });
    breedCreated.addTemperament(temperamentDB);
    res.status(200).send("New Breed Registered"); // ADentro de la base de datos, se creo una nueva raza!
  } catch (e) {
    res.status(404).send("please check the data"); // porque? no hay porque?
  }
});
module.exports = router;
