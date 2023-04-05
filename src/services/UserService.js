const dbConnection = require("../config/db");

function authentication(username, password) {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "SELECT * FROM USERS WHERE USERS.USERNAME = ? AND USERS.PASSWORD = ?",
      [username, password],
      (err, result) => {
        if (err) reject(err);
        resolve(...result);
      }
    );
  });
}

function setToken(id, token) {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "UPDATE USERS SET TOKEN = ? WHERE USERS.ID = ?",
      [token, id],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
}

module.exports = {
  authentication,
  setToken,
};
