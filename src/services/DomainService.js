const db = require("../config/db");

function getAllDomains() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM DOMAIN ORDER BY id_domain ASC", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function getOneDomain(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM DOMAIN WHERE DOMAIN.id_domain = ?",
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
      `SELECT DOMAIN.id_domain,
              DOMAIN.url_domain,
              SUBDOMAIN.subdomain
         FROM DOMAIN
         JOIN SUBDOMAIN 
           ON DOMAIN.id_domain = ?
        WHERE DOMAIN.id_domain = SUBDOMAIN.id_domain`,
      [id],
      (err, results) => {
        if (err) reject(err);
        const rset = {
          id_domain: results[0].id_domain,
          url_domain: results[0].url_domain,
          subdomainCount: results.length,
          subdomains: results.map(({ subdomain }) => subdomain),
        };
        resolve(rset);
      }
    );
  });
}

function createDomain(url) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO DOMAIN (url_domain) VALUES(?)",
      [url],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function createSubdomain(subdomain, id) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO SUBDOMAIN (id_domain, subdomain) VALUES (?, ?)",
      [id, subdomain],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

function deleteDomain(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM DOMAIN WHERE DOMAIN.id_domain = ?",
      [id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
}

module.exports = {
  getAllDomains,
  getOneDomain,
  getSubdomains,
  createDomain,
  createSubdomain,
  deleteDomain,
};
