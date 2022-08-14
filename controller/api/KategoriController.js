const { kategori } = require("../../models");
class KategoriController {
  static async index(req, res) {
    try {
      let data = await kategori.findAll({
        order: [["id", "ASC"]],
      });

      if (data.length == 0) {
        throw {
          message: "data kosong",
        };
      }
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      res.render("kategori/create.ejs");
    } catch (error) {
      res.json(error);
    }
  }

  static async edit(req, res) {
    try {
      const id = Number(req.params.id);
      let data;

      await kategori
        .findByPk(id)
        .then((results) => {
          data = results.dataValues;
        })
        .catch((err) => console.log(err));

      return res.render("kategori/edit.ejs", { result: data });
    } catch (error) {
      res.json(error);
    }
  }

  static async destroy(req, res) {
    try {
      const id = Number(req.params.id);

      let data = await kategori.destroy({
        where: {
          id: id,
        },
      });

      res.json(data);
      //return res.redirect("/kategori");
    } catch (error) {
      res.json(error);
    }
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let data = await kategori.create({
        name,
      });
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;

      await kategori
        .update(
          {
            name,
          },
          { where: { id } }
        )
        .then((result) => {
          //console.log(result);
          return res.json(result);
        })
        .catch((err) => res.json(err));
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let data = await kategori.destroy({
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

module.exports = KategoriController;
