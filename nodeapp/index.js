const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send('{CI/CD pipeline docker automation"}');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("App listening the on port 3000!");
});

module.exports = app;
