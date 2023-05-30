const LiveData = require("../schemas/LiveData");

class LiveDataService {
  constructor() {}

  get = async (search) => {
    let condition = {};
    if (search) {
      const regex = new RegExp(search, "i");
      condition = {
        "cryptoCurrency.name": { $regex: regex },
      };
    }
    return LiveData.find(condition);
  };

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
