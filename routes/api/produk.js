const route = require("express").Router();

const ProdukController = require("../../controller/api/ProdukController");

route.get("/", ProdukController.index);
route.post("/create", ProdukController.add);
route.post("/update/:id", ProdukController.update);
route.get("/delete/:id", ProdukController.delete);

module.exports = route;
