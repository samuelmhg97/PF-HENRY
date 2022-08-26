const { Router } = require("express");
const { Op } = require("sequelize");
const { Movie, Rating } = require("../db.js");
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
        include: {
          model: Rating,
          as: "ratings",
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
    const movie = await Movie.findByPk(id, {
      include: {
        model: Rating,
        as: "ratings",
      } 
    });
    if (movie) {
      res.json(movie);
    } else {
      res.send("No matches were found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  if (!req.body) res.send("The form is empty");

  try {
    const {
      title,
      description,
      poster,
      teaser,
      genre,
      display,
      classification,
      cast,
      director,
      writter,
      language,
      duration,
    } = req.body;

    const movie = await Movie.create({
      title,
      description,
      poster,
      teaser,
      genre,
      display,
      duration: parseInt(duration),
      classification,
      cast,
      director,
      writter,
      language,
    });
    res.json(movie);
  } catch (e) {
    next(e);
  }
});

router.put("/update/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!req.body) res.send("The form is empty");

  try {
    const {
      title,
      description,
      poster,
      teaser,
      genre,
      display,
      classification,
      cast,
      director,
      writter,
      language,
      duration,
    } = req.body;

    const movie = await Movie.findByPk(id);

    if (movie) {
      const result = await movie.update({
        title,
        description,
        poster,
        teaser,
        genre,
        display,
        classification,
        cast,
        director,
        writter,
        language,
        duration: parseInt(duration),
      });
      res.json(result);
    } else {
      res.send("No matches were found");
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByPk(id);
    if (movie) {
      const result = await movie.destroy();
      res.json(result);
    } else {
      res.send("No matches were found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;