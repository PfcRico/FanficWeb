const express = require("express");

const app = express();

app.use(express.static("./dist/fanfic-web"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/fanfic-web/src/app" });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
