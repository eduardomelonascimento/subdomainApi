const DomainService = require("../services/DomainService");
const SecurityTrailsService = require("../services/SecurityTrailsSevice");

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
    const { subdomain_count, subdomains } =
      await SecurityTrailsService.getSubdomains(url);
    if (subdomain_count) {
      const { insertId } = await DomainService.createDomain(url);
      subdomains.forEach((subdomain) => {
        DomainService.createSubdomain(subdomain, insertId);
      });
      res.status(201).json({
        status: `Domain ${url} saved successfully.`,
      });
    } else {
      res
        .status(404)
        .json({ message: "No subdomains were found for this domain." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteDomain(req, res) {
  try {
    const { id } = req.params;
    await DomainService.deleteDomain(id);
    res.status(200).json({
      status: "Success deleting domain",
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
  deleteDomain,
};
