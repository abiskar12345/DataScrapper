const WatchListService = require("../services/WatchListService");

class WatchListController {
  getwatchList = async (req, res) => {
    try {
      const watch = await WatchListService.get();
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  add = async (req, res) => {
    try {
      const watchList = await WatchListService.create(req.body);
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  update = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const watchList = await WatchListService.update(id, data);
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      const watchList = await WatchListService.remove(id);
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const watchList = await WatchListService.getById(id);
      res.status(200).json({ status: "success", data: watchList });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new WatchListController();
