const { Router } = require("express");
const { Op } = require("sequelize");
const { Movie } = require("../db.js");
const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  if (name) {
    try {
      const movies = await Movie.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      if (movies.length > 0) {
        res.json(movies);
      } else {
        res.send("Movie not found");
      }
    } catch (e) {
      next(e);
    }
  } else {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (e) {
      next(e);
    }
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByPk(id);
    if (movie) {
      res.json(movie);
    } else {
      res.send("No matches were found");
    }
  } catch (e) {
    next(e);
  }
});
