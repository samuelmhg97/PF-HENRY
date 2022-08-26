const { Router } = require("express");
const axios = require("axios");
require("dotenv").config();
const { checkValidUser } = require("../middlewares/auth.js");

const users = Router();

users.get("/validateUser", checkValidUser, (req, res) => {
  res.status(202).send({ message: "Usuario valido" });
});

module.exports = users;
