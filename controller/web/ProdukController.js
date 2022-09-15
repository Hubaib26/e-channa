const { produk } = require("../../models");

class ProdukController {
  static async index(req, res) {
    try {
      let data = await produk.findAll({
        order: [["id", "ASC"]],
      });

      if (data.length == 0) {
        throw {
          message: "data kosong",
        };
      }
      return res.render("produk/index.ejs", { result: data });
      // return res.json(data);
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      res.render("produk/create.ejs");
    } catch (error) {
      res.json(error);
    }
  }

  static async add(req, res) {
    try {
      const { kategori_id, name, image, stok, price } = req.body;
      let data = await produk.create({
        kategori_id,
        name,
        image,
        stok,
        price,
      });
      return res.redirect("/produk");
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

      return res.render("produk/edit.ejs", { result: data });
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { kategori_id, name, image, stok, price } = req.body;

      await produk
        .update(
          {
            kategori_id,
            name,
            image,
            stok,
            price,
            updateAt: Date.now(),
          },
          { where: { id: productId } }
        )
        .then((result) => {
          return res.redirect("/produk");
        })
        .catch((err) => res.json(err));
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let data = await produk.destroy({
        where: {
          id: id,
        },
      });
      //res.json(data);
      return res.redirect("/produk");
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ProdukController;
