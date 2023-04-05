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

function logout(id) {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      "UPDATE USERS SET TOKEN = NULL WHERE USERS.ID = ?",
      [id],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
}

function getToken() {
  return new Promise((resolve, reject) => {
    dbConnection.query("SELECT * FROM USERS", (err, result) => {
      if (err) reject(err);
      const { TOKEN } = result[0];
      resolve(TOKEN);
    });
  });
}

module.exports = {
  authentication,
  setToken,
  logout,
  getToken,
};
