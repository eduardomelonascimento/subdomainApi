const DomainService = require("../services/DomainService");

async function getAllDomains(req, res) {
  try {
    let domains = await DomainService.getAllDomains();
    res.status(200).json(domains);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getOneDomain(req, res) {
  const { id } = req.params;
  let domain = await DomainService.getOneDomain(id);
  res.status(200).json(domain);
}

async function getSubdomains(req, res) {
  const { id } = req.params;
  let subdomains = await DomainService.getSubdomains(id);
  res.status(200).json(subdomains);
}

module.exports = {
  getAllDomains,
  getOneDomain,
  getSubdomains,
};
