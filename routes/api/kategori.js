const route = require("express").Router();

const KategoriController = require("../../controller/api/KategoriController");

route.get("/", KategoriController.index);
route.post("/create", KategoriController.add);
route.post("/update/:id", KategoriController.update);
route.get("/delete/:id", KategoriController.delete);

module.exports = route;
