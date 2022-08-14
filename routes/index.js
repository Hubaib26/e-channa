const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

//api
const kategoriApi = require("./api/kategori");
const memberApi = require("./api/member");
const produkApi = require("./api/produk");

route.use("/api/kategori", kategoriApi);
route.use("/api/member", memberApi);
route.use("/api/produk", produkApi);

//web
const kategori = require("./kategori");
const member = require("./member");
const produk = require("./produk");

route.use("/kategori", kategori);
route.use("/member", member);
route.use("/produk", produk);
module.exports = route;
