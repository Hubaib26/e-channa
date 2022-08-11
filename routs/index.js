const route = require('express').Router();

route.get("/", (req, res) => {
    res.render("index.js");
});

const { Model } = require('sequelize/types');
const category = require('./category');
const member = require('./member');
const produck = require('./produck');
const transaksi = require('./transaksi');

route.use('/category', category);
route.use('/member', member);
route.use('/produck', produck);
route.use('/transaksi',transaksi);

module.exports = route;