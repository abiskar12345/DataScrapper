const { Worker } = require("worker_threads");

// Function to create a worker thread for scraping data
function startScrapingWorker() {
  const worker = new Worker("./scrapperMain");
  worker.on("message", (data) => {
    saveToDatabase(data);
  });
  worker.on("error", (error) => {
    console.error("Scraping worker error:", error);
  });
  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error("Scraping worker stopped with exit code:", code);
    }
  });
}

startScrapingWorker();
