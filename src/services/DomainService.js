const db = require("../config/db");

function getAllDomains() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM DOMAIN", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getOneDomain(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM DOMAIN WHERE DOMAIN.ID = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function getSubdomains(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM SUBDOMAIN WHERE SUBDOMAIN.ID = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function createDomain(url) {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO DOMAIN (URL) VALUES(?)", [url], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  getAllDomains,
  getOneDomain,
  getSubdomains,
  createDomain,
};
