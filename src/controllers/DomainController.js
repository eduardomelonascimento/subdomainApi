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
  try {
    const { id } = req.params;
    let domain = await DomainService.getOneDomain(id);
    res.status(200).json(domain);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getSubdomains(req, res) {
  try {
    const { id } = req.params;
    let subdomains = await DomainService.getSubdomains(id);
    res.status(200).json(subdomains);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createDomain(req, res) {
  try {
    const { url } = req.body;
    await DomainService.createDomain(url);
    res.status(201).json({
      status: `Domain ${url} saved successfully.`,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllDomains,
  getOneDomain,
  getSubdomains,
  createDomain,
};
