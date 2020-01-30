const path = require("path");
//is this line necessary for this?
const router = require("express").Router();

  router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
  });

  //is this right?
//   router.get("/exercise?", (req, res) => {
//     res.sendFile(path.join(_dirname, "../public/exercise.html"));
//   })

module.exports = router;


