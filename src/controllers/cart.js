const CartSchema = require('../models/cart');
const BusinessesSchema = require('../models/businesses');

function CreateCart(req, res) {
  let Cart = new CartSchema();
  Cart.userId = req.body.userId;
  Cart.businessId = req.body.businessId;
  Cart.save((err, Cart) => {
    if (err) {
      return res.status(202).send({message: 'Error'});
    } else {
    return res.status(200).send({message: 'Ok', cart: Cart._id});
    }
  });
}

function ReadCart(req, res) {
  let id = req.params.id;
  CartSchema.findById(id, (err, Cart) => {
    if (!Cart) {
      return res.status(202).send({message: 'Error'}); // Cart doesn't exist
    } else {      
      return res.status(200).send({message: 'Ok', products: Cart.products});
    }
  });
}

function UpdateCart(req, res) {
  let cartId = req.params.cartId;
  let businessId = req.params.businessId;
  CartSchema.findOne({businessId}, (err, Business) => {
    if (!Business) {
      return res.status(202).send({message: 'Wrong business'}); // Cart from another business
    } else {
      let productId = req.body.productId;
      let qty = req.body.qty;
      CartSchema.findOne({'products.productId': productId}, (err, Cart) => {
        if (Cart) {
          CartSchema.updateOne({'products.productId': productId}, {$set: {'products.$.qty': qty}}, (err, Cart1) => {
            return res.status(200).send({message: 'Product updated'});
          });
        } else {
          let Product = req.body;
          CartSchema.findByIdAndUpdate(cartId, {$push: {products: Product}}, (err, Cart) => {
            return res.status(200).send({message: 'Product added'});
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
      return res.status(202).send({message: 'Error'});
    } else {      
      return res.status(200).send({message: 'Ok', cart: Cart});
    }
  });
}

function DeleteCartProduct(req, res) {
  let cartId = req.params.cartId;
  CartSchema.findById(cartId, (err, Cart) => {
    if (!Cart) {
      return res.status(202).send({message: 'Error'}); // Cart doesn't exist
    } else {      
      let productId = req.params.productId;
      CartSchema.findOne({'products.productId': productId}, (err, Cart) => {
        if (Cart) {
          CartSchema.findByIdAndUpdate(cartId, {$pull: {products: Product}}, (err, Cart) => {
            return res.status(200).send({message: 'Product deleted'});
          });
        } else {
          return res.status(202).send({message: 'Product not found'});
        }      
      });
    }
  });  
}

module.exports = {
  CreateCart,
  ReadCart,
  UpdateCart,
  DeleteCart,
  DeleteCartProduct
};