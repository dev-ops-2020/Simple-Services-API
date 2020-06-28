const CartSchema = require('../models/cart');
const BusinessesSchema = require('../models/businesses');

function CreateCart(req, res) {
  let Cart = new CartSchema();
  Cart.userId = req.body.userId;
  Cart.businessId = req.body.businessId;
  Cart.save((err, Cart) => {
    if (err) {
      return res.status(202).send({message: 0}); // Error
    } else {
    return res.status(200).send({message: Cart._id}); // Ok
    }
  });
}

function ReadCart(req, res) {
  let id = req.params.id;
  CartSchema.findById(id, (err, Cart) => {
    if (!Cart) {
      return res.status(202).send({message: 0}); // Error
    } else {      
      return res.status(200).send({message: Cart}); // Ok
    }
  });
}

function UpdateCart(req, res) {
  let cartId = req.params.cartId;
  CartSchema.findById(cartId, (err, Cart) => {
    if (!Cart) {
      return res.status(202).send({message: 0}); // Cart doesn't exist
    } else {
      let businessId = req.params.businessId;
      BusinessesSchema.findById(businessId, (err, Business) => {
        if (!Business) {
          return res.status(202).send({message: 10}); // Cart from another business
        } else {
          let productId = req.body.productId;
          let qty = req.body.qty;
          CartSchema.findOne({'products.productId': productId}, (err, Cart) => {
            if (Cart) {
              CartSchema.updateOne({'products.productId': productId}, {$set: {'products.$.qty': qty}}, (err, Cart1) => {
                return res.status(200).send({message: 2}); // Product updated
              });
            } else {
              let Product = req.body;
              CartSchema.findByIdAndUpdate(cartId, {$push: {products: Product}}, (err, Cart) => {
                return res.status(200).send({message: 1}); // Product added
              });
            }
          });
        }
      });
    }
  });
}

function DeleteCart(req, res) {
  let id = req.params.id;
  CartSchema.findByIdAndDelete(id, (err, Cart) => {
    if (err) {
      return res.status(202).send({message: 0}); // Error
    } else {
    return res.status(200).send({message: 1}); // Ok
  }
  });
}

module.exports = {
  CreateCart,
  ReadCart,
  UpdateCart,
  DeleteCart
};