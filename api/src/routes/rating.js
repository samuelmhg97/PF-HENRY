const { Router } = require("express");
const { Rating, Movie } = require("../db.js");
const router = Router();

router.get("/", async (req, res, next) => {
  const { id } = req.query;

  if (id) {
    try {
      const rating = await Rating.findByPk(id, {
        include: {
            model: Movie,
            as: "movie",
        }
      });
      if (rating) {
        res.json(rating);
      } else {
        res.send("No matches were found");
      }
    } catch (e) {
      next(e);
    }
  } else {
    try {
      const ratings = await Rating.findAll();
      res.json(ratings);
    } catch (e) {
      next(e);
    }
  }
});

router.post("/", async (req, res, next) => {
  if (!req.body) res.send("The form is empty");

  try {
    const { movie_id, user_id, rate, review } = req.body;

    const rating = await Rating.create({
      movie_id: parseInt(movie_id),
      user_id: parseInt(user_id),
      rate: parseInt(rate),
      review,
    });
    res.json(rating);
  } catch (e) {
    next(e);
  }
});

router.put("/update/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!req.body) res.send("The form is empty");

  try {
    const { movie_id, user_id, rate, review } = req.body;
    const rating = await Rating.findByPk(id);
    if (rating) {
      await rating.update({
        movie_id: parseInt(movie_id),
        user_id: parseInt(user_id),
        rate: parseInt(rate),
        review,
      });
      res.json(rating);
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
    const rating = await Rating.findByPk(id);
    if (rating) {
      await rating.destroy();
      res.send("Rating deleted");
    } else {
      res.send("No matches were found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;