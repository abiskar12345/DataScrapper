const LiveDataService = require("../services/LiveDataService");

class WatchListController {
  getwatchList = async (req, res) => {
    try {
      const liveData = await LiveDataService.get();
      res.status(200).json({ status: "success", data: liveData });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const watchList = await LiveDataService.getById(id);
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new WatchListController();
