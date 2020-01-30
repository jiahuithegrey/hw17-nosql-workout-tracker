var path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
  });

  //is this right?
  app.get("/exercise?", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
  })

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
  });

};


