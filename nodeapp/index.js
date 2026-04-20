const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, Welcome to CI/CD"}');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
