const LoginService = require("../services/LoginService");

class LoginController {
  login = async (req, res) => {
    try {
      const user = await LoginService.login(req.body.email);
      res.status(200).json({ status: "success", data: user });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new LoginController();
