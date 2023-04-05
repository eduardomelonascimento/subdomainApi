const UserService = require("../services/UserService");
const crypto = require("crypto");

async function authentication(req, res) {
  try {
    const { username, password } = req.body;
    const user = await UserService.authentication(username, password);
    if (user) {
      const token = crypto.randomBytes(15).toString("hex");
      await UserService.setToken(user.ID, token);
      res.status(200).json({
        username: user.USERNAME,
        id: user.ID,
        token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}


module.exports = {
  authentication,
};
