const express = require("express");
const path = require("path");

const app = express();

const APP_ENV = process.env.APP_ENV || "development";
const APP_NAME = process.env.APP_NAME || "Azure Node App";
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { appName: APP_NAME, env: APP_ENV });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: APP_ENV });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
