const { HttpStatusCode } = require("axios");
const { getToken } = require("../services/UserService");

async function checkCredentials(req, res, next) {
  const token = req.headers["access-token"];
  if (!token) {
    res
      .status(HttpStatusCode.Unauthorized)
      .json({ error: "Unauthorized: No token provided" });
  } else {
    const dbToken = await getToken();
    if (token == dbToken) {
      next();
    } else {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ error: "Unauthorized: Invalid token" });
    }
  }
}

module.exports = checkCredentials;
