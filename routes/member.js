const route = require("express").Router();

const MemberController = require("../controller/web/MemberController");

route.get("/", MemberController.index);
route.post("/create", MemberController.add);
route.post("/update/:id", MemberController.update);
route.get("/delete/:id", MemberController.delete);
route.get("/create", MemberController.create);
route.get("/edit/:id", MemberController.edit);

module.exports = route;
