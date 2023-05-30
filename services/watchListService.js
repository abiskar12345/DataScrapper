const WatchList = require("../schemas/watchlist");

class WatchListService {
  constructor() {}

  async get() {
    return WatchList.find();
  }

  create = async (data) => {
    return WatchList.create(data);
  };

  update = async (id, data) => {
    return WatchList.findOneAndUpdate(
      {
        _id: id,
      },
      data,

      { new: true }
    );
  };

  remove = async (id) => {
    return WatchList.deleteOne({
      _id: id,
    });
  };

  getById = async (id) => {
    return WatchList.findById(id);
  };
}

module.exports = new WatchListService();
