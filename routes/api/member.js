const route = require("express").Router();

const MemberController = require("../../controller/api/MemberController");

route.get("/", MemberController.index);
route.post("/create", MemberController.add);
route.post("/update/:id", MemberController.update);
route.get("/delete/:id", MemberController.delete);

module.exports = route;
