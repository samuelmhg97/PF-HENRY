const firebase = require("../firebase-config.js");

const checkValidUser = async (req, res, next) => {
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

module.exports = { checkValidUser };
