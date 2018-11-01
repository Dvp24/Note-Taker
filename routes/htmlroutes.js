var router = require("express").Router();
var path = require("path");

// how we set default page??
router.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});