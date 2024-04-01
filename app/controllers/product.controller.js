const db = require("../models");
const Product = db.products;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.product_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Product
  const product = new Product({
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_price: req.body.product_price,
  });

  // Save Product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const product_name = req.query.product_name;
  var condition = product_name ? { product_name: { $regex: new RegExp(product_name), $options: "i" } } : {};

  Product.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};


