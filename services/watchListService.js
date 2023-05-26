const watchList = require("../schemas/watchlist");

class WatchListService {
  constructor() {}

  async get() {
    return watchList.find();
  }

  create = async (data) => {
    return watchList.create(data);
  };

  update = async (id, data) => {
    return watchList.findOneAndUpdate(
      {
        _id: id,
      },
      data,

      { new: true }
    );
  };

  remove = async (id) => {
    return watchList.deleteOne({
      _id: id,
    });
  };

  getById = async (id) => {
    return watchList.findById(id);
  };
}

module.exports = new WatchListService();
