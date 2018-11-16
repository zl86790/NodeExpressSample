var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  req.session.username = "Lizhe";
  res.render("index", { title: "Express " + req.session.username });
});

module.exports = router;
