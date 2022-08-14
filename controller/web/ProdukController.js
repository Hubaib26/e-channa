const { produk, produk_member, member, kategori } = require("../../models");

class ProdukController {
  static async index(req, res) {
    try {
      let data = await produk_member.findAll({
        order: [["id", "ASC"]],
        attributes: ["id"],
        include: [{ model: produk, include: [kategori] }],
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
      console.log("mn");
      let data = await kategori.findAll({
        order: [["id", "ASC"]],
      });
      let dataMember = await member.findAll({
        order: [["id", "ASC"]],
      });
      console.log("masuk");

      res.render("produk/create.ejs", { kategori: data, member: dataMember });
    } catch (error) {
      res.json(error);
    }
  }

  static async add(req, res) {
    try {
      const { kategori_id, name, image, stok, price, member_id } = req.body;
      let data = await produk
        .create({
          kategori_id,
          name,
          image,
          stok,
          price,
        })
        .then((result) => {
          let dataLastId = result.dataValues.id;

          produk_member.create({
            produkId: dataLastId,
            memberId: member_id,
          });
        });

      // console.log("member", data//produk);
      // return res.json(data);
      res.redirect("/produk");
    } catch (error) {
      res.json(error);
    }
  }

  static async edit(req, res) {
    try {
      //const { member_id } = req.body;
      let listKategori = await kategori.findAll({
        order: [["id", "ASC"]],
      });
      let dataMember = await member.findAll({
        order: [["id", "ASC"]],
      });

      const id = Number(req.params.id);

      await produk_member
        .findOne({
          where: { id: id },
          attributes: ["id", "memberId", "produkId"],
          include: [{ model: produk, include: [kategori] }],
        })
        .then((result) => {
          // res.json(result);
          return res.render("produk/edit.ejs", {
            result: result,
            kategori: listKategori,
            member: dataMember,
          });
        })
        .catch((err) => console.log(err));

      //return res.render("produk/edit.ejs", { kategori: data });
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { kategori_id, name, image, stok, price, member_id, productId } =
        req.body;

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
          console.log("aaaaaa");
          console.log(result);
          //return res.json(result);
          produk_member.update({ memberId: member_id }, { where: { id: id } });
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
