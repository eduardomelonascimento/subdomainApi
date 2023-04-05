const router = require("express").Router();
const DomainController = require("./controllers/DomainController");
const UserController = require("./controllers/UserController")

router.get("/domains", DomainController.getAllDomains);
router.get("/domains/:id", DomainController.getOneDomain);
router.get("/subdomains/:id", DomainController.getSubdomains);

router.post("/domains", DomainController.createDomain)
router.delete("/domains/:id", DomainController.deleteDomain)

router.post("/auth", UserController.authentication)
router.post("/logout", UserController.logout)

module.exports = router;
