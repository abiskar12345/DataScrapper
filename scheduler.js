const corn = require("node-cron");
const worker = require("./dataScrapper/scrapperWorker");
const start = () => {
  console.log("hii2");

  // Define the cron schedule (every 5 minutes)
  corn.schedule("*/5 * * * * *", async () => {
    worker();
  });
};
module.exports = { start };
