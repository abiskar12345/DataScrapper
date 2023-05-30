const User = require("../schemas/User");

class LoginService {
  constructor() {}

  async login(email) {
    let user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      return User.create({ email });
    }
    return user;
  }
}

module.exports = new LoginService();
