const router = require("express").Router();
const DomainController = require("./controllers/DomainController");
const UserController = require("./controllers/UserController");
const checkCredentials = require("./middlewares/authentication");

router.get("/domains", checkCredentials, DomainController.getAllDomains);
router.get("/domains/:id", checkCredentials, DomainController.getOneDomain);
router.get("/subdomains/:id", checkCredentials, DomainController.getSubdomains);

router.post("/domains", checkCredentials, DomainController.createDomain);
router.delete("/domains/:id", checkCredentials, DomainController.deleteDomain);

router.post("/auth", UserController.authentication);
router.post("/logout", checkCredentials, UserController.logout);

module.exports = router;
