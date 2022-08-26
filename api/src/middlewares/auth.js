const firebase = require("../firebase-config.js");

//Revisa que el token del usuario este activo e informa
const checkActiveUser = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedValue = await firebase.auth().verifyIdToken(token);
    if (decodedValue) {
      return next();
    }
    return res
      .status(401)
      .send({ message: "Invalid user or session no longer active" });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//Revisa q el UID del usuario es valido
const checkValidUser = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedValue = await firebase.auth().verifyIdToken(token);
    if (decodedValue) {
      const uid = decodedValue.uid;
      const user = await firebase.auth().getUser(uid);
      if (user) {
        req.body.uid = uid;
        return next();
      }
    }
    return res
      .status(401)
      .send({ message: "Invalid user or session no longer active" });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { checkActiveUser, checkValidUser };
