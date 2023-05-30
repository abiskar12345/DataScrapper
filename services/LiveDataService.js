const LiveData = require("../schemas/LiveData");

class LiveDataService {
  constructor() {}

  async get(search) {
    let condition = {};
    if (search) {
      const regex = new RegExp(search, "i");
      condition = {
        $or: [
          { "cryptoCurrency.name": { $regex: regex, $options: "i" } },
          { "cryptoCurrency.code": { $regex: regex, $options: "i" } },
        ],
      };
    }
    return LiveData.find(condition);
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
