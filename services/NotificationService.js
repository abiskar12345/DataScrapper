const Notification = require("../schemas/Notification");
const WatchList = require("../schemas/watchlist");

class NotificationService {
  constructor() {}

  async checkAndAddNotification({ code, price, dayData }) {
    try {
      let message;
      const watchList = await WatchList.find({
        code,
        $or: [
          {
            minPrice: { $gt: price },
          },
          {
            maxPrice: { $lt: price },
          },
        ],
      });
      dayData > 0
        ? (message = `${code} is on the Move.The price is up ${dayData} % in 24hr and price is $ ${price}`)
        : (message = `${code} is on the Move.The price is Down ${dayData} % in 24hr and price is $ ${price}`);
      if (!watchList.length > 0) return;
      let notifications = [];

      watchList.forEach((list) => {
        notifications.push({ userId: list.userId, message });
      });

      await Notification.bulkWrite(notifications);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserNotification(id) {
    return Notification.findAll({ where: { userId: id } });
  }
}

module.exports = new NotificationService();
