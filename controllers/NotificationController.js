const NotificationService = require("../services/NotificationService");

class NotificationController {
  getUserNotification = async (req, res) => {
    try {
      const data = await NotificationService.getUserNotification(req.params.id);
      res.status(200).json({ status: "success", data: data });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new NotificationController();
