// const { parentPort } = require("worker_threads");
const axios = require("axios");
const cheerio = require("cheerio");
const { parentPort } = require("worker_threads");
const NotificationService = require("../services/NotificationService");
async function scrapeData() {
  try {
    const response = await axios.get("https://coinranking.com/");
    const $ = cheerio.load(response.data);
    const cryptocurrencies = [];
    $(".table__row").each((index, element) => {
      const name = $(element).find(".table__cell .profile__link").text().trim();
      const image = $(element)
        .find(".table__cell .profile__logo")
        .text()
        .trim();
      const code = $(element)
        .find(" .table__cell .profile__subtitle-name")
        .text()
        .trim();
      const raw = $(element).find("  .table__cell--2-of-8").text().trim();
      const price = raw.replace(/\s+/g, "").split("$").filter(Boolean);

      const dayData = $(element).find(" .table__cell--1-of-8").text().trim();
      cryptocurrencies.push({
        cryptoCurrency: { name, image, code },
        marketCap: price[1],
        price: price[0],
        dayData,
      });
      NotificationService.checkAndAddNotification({
        code,
        price,
        dayData,
      });
    });

    return cryptocurrencies;
  } catch (error) {
    console.error("Error scraping data:", error);
  }
}

scrapeData()
  .then((data) => parentPort.postMessage(data))
  .catch((err) => console.log(err));
