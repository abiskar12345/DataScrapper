const WatchListService = require("../services/watchListService");

class WatchListController {
  getwatchList = async (req, res) => {
    try {
      const task = await WatchListService.get();
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  add = async (req, res) => {
    try {
      const task = await WatchListService.create(req.body);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  update = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const task = await WatchListService.update(id, data);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await WatchListService.remove(id);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await WatchListService.getById(id);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new TodoController();
