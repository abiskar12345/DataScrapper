const LiveData = require("../schemas/liveData");

class LiveDataService {
  constructor() {}

  async get() {
    return watchList.find();
  }

  create = async (data) => {
    const bulkOps = data.map((livedata) => ({
      updateOne: {
        filter: { "cryptoCurrency.code": livedata.cryptoCurrency.code },
        update: livedata,
        upsert: true,
      },
    }));
    return LiveData.bulkWrite(bulkOps);
  };

  update = async (id, data) => {
    return LiveData.findOneAndUpdate(
      {
        _id: id,
      },
      data,

      { new: true }
    );
  };

  getById = async (id) => {
    return LiveData.findById(id);
  };
}

module.exports = new LiveDataService();
