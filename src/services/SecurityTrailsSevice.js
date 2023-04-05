const axios = require("axios");

async function getSubdomains(domain) {
  let { data } = await axios.get(
    `https://api.securitytrails.com/v1/domain/${domain}/subdomains?apikey=${process.env.SECURITYTRAILS_APIKEY}`
  );

  return data;
}

module.exports = { getSubdomains };
