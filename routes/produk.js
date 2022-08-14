const route = require("express").Router();

const ProdukController = require("../controller/web/ProdukController");

route.get("/", ProdukController.index);
route.post("/create", ProdukController.add);
route.post("/update/:id", ProdukController.update);
route.get("/delete/:id", ProdukController.delete);
route.get("/create", ProdukController.create);
route.get("/edit/:id", ProdukController.edit);

module.exports = route;
