const { Router } = require("express");
const { User, Role, Op } = require("sequelize");
const axios = require("axios");
require("dotenv").config();
const { checkActiveUser, checkValidUser } = require("../middlewares/auth.js");
const Role = require("../models/Role.js");

const users = Router();

//Crea un usuario en nuestra DB, asignandole un rol y la referencia al UID de firebase
users.post("/createBasicUser", checkValidUser, (req, res) => {
  const { email, uid, name } = req.body;
  if (!email || !name || email === "" || name === "")
    res
      .status(400)
      .send({
        message: "All creation fields must be sent, and they can't be empty",
      });
  try{
    const userRoleObject = await Role.findOne({
      where: {name: 'Customer'}
    })

    const newUser = await User.create({
      name: name,
      email: email,
      role_id: userRoleObject.role_id,
    })
  } catch (err){
    res.status(400).send('xd')
  }
});

//Valida que el usuario exista, o que la sesion no haya terminado
users.get("/validateUser", checkActiveUser, (req, res) => {
  res.status(202).send({ message: "Usuario valido" });
});

module.exports = users;
