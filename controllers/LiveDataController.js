const LiveDataService = require("../services/LiveDataService");

class LiveDataController {
  getLiveData = async (req, res) => {
    try {
      const liveData = await LiveDataService.get(req?.query.search);
      res.status(200).json({ status: "success", data: liveData });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const liveData = await LiveDataService.getById(id);
      res.status(200).json({ status: "success", data: liveData });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new LiveDataController();
