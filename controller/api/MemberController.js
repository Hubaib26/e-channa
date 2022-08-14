const { member } = require("../../models");

class MemberController {
  static async index(req, res) {
    try {
      let data = await member.findAll({
        order: [["id", "ASC"]],
      });
      if (data.length == 0) {
        throw {
          message: "Data tidak tersedia",
        };
      }
      return res.json(data);
      //   return res.render("member/index.ejs", { result: data });
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      res.render("member/create.ejs");
    } catch (error) {
      res.json(error);
    }
  }

  static async edit(req, res) {
    try {
      const id = Number(req.params.id);
      let data;

      await member
        .findByPk(id)
        .then((results) => {
          data = results.dataValues;
        })
        .catch((err) => console.log(err));

      return res.render("member/edit.ejs", { result: data });
    } catch (error) {
      res.json(error);
    }
  }

  static async destroy(req, res) {
    try {
      const id = Number(req.params.id);

      let data = await member.destroy({
        where: {
          id: id,
        },
      });

      res.json(data);
      //   return res.redirect("/members");
    } catch (error) {
      res.json(error);
    }
  }

  static async add(req, res) {
    try {
      const { name, addres, city, gender, email } = req.body;

      let data = await member.create({
        name,
        addres,
        city,
        gender,
        email,
      });

      return res.json(data);
      //   return res.redirect("/members");
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, addres, city, gender, email } = req.body;

      await member
        .update(
          {
            name,
            addres,
            city,
            gender,
            email,
            updateAt: Date.now(),
          },
          { where: { id } }
        )
        .then((result) => {
          //   console.log(result);
          return res.json(result);
          //   return res.redirect("/members");
        })
        .catch((err) => res.json(err));
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let data = await member.destroy({
        where: {
          id: id,
        },
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = MemberController;
