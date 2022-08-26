const { Router } = require("express");
const { Product } = require("../db.js");
const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  if (name) {
    try {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      if (products.length > 0) {
        res.json(products);
      } else {
        res.send("Product not found");
      }
    } catch (e) {
      next(e);
    }
  } else {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (e) {
      next(e);
    }
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
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
    const { name, price, stock } = req.body;

    const product = await Product.create({
      name,
      price: parseInt(price),
      stock: parseFloat(stock),
    });
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.put("/update/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!req.body) res.send("The form is empty");

  try {
    const { name, price, stock } = req.body;
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({
        name,
        price: parseInt(price),
        stock: parseFloat(stock),
      });
      res.json(product);
    } else {
      res.send("Product not found");
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.json(product);
    } else {
      res.send("Product not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
