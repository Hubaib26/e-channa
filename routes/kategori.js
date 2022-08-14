const route = require("express").Router();

const KategoriController = require("../controller/web/KategoriController");

route.get("/", KategoriController.index);
route.post("/create", KategoriController.add);
route.post("/update/:id", KategoriController.update);
route.get("/delete/:id", KategoriController.delete);
route.get("/create", KategoriController.create);
route.get("/edit/:id", KategoriController.edit);

module.exports = route;
