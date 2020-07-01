const BusinessesSchema = require('../models/businesses');
const bcrypt = require('bcrypt');

function CreateBusiness(req, res) {
  let Business = new BusinessesSchema();
  // Owner info
  Business.owner = req.body.owner;
  Business.phone = req.body.phone;
  Business.email = req.body.email;
  Business.pass = req.body.pass;

  bcrypt.hash(Business.pass, bcrypt.genSaltSync(7), (err, hash) => {
    Business.pass = hash;
    // Business info
    Business.logo = req.body.logo;
    Business.name = req.body.name;
    Business.desc = req.body.desc;
    Business.slogan = req.body.slogan;
    Business.address = req.body.address;
    Business.latitude = req.body.latitude;
    Business.longitude = req.body.longitude;
    Business.fb = req.body.fb;
    Business.ig = req.body.ig;
    Business.wa = req.body.wa;
    Business.schedule = req.body.schedule;
    Business.categories = req.body.categories;
    Business.pictures = req.body.pictures;
    Business.save((err, Business) => {
      if (err) {
        return res.status(202).send({message: 'Error creating business'});
      } else {
      return res.status(200).send({message: 'Business created', business: Business});
      }
    });   
  });
}

function LogIn(req, res) {
  let email = req.body.email;
  let pass = req.body.pass;
  BusinessesSchema.findOne({email}, (err, Business) => {
    if (!Business || !Business.status) {
      return res.status(202).send({message: 'Business not found'});
    } else {
      bcrypt.compare(pass, Business.pass, function(err, match) {
        if (!match) {
          return res.status(202).send({message: 'Passwords do not match'});
        } else {
          return res.status(200).send({message: 'Ok', business: Business});
        }     
      });
    }
  });  
}

function ReadBusiness(req, res) {
  let id = req.params.id;
  BusinessesSchema.findById(id, (err, Business) => {
    if (!Business) {
      return res.status(202).send({message: 'Business not found'});
    } else if (!Business.status) {
      return res.status(202).send({message: 'Business deleted...'});
    } else {      
      return res.status(200).send({message: 'Business read', business: Business});
    }
  });
}

function UpdateBusiness(req, res) {
  let id = req.params.id;
  let Business = req.body;
  BusinessesSchema.findByIdAndUpdate(id, Business, (err, Business) => {
    if (err) {
      return res.status(202).send({message: 'Update failed'});
    } else if (!Business.status) {
      return res.status(202).send({message: 'Business deleted...'});
    } else {      
      return res.status(200).send({message: 'Business updated'});
    }
  });
}

function DeleteBusiness(req, res) {
  let id = req.params.id;
  BusinessesSchema.findById(id, (err, Business) => {
    if (!Business) {
      return res.status(202).send({message: 'Business not found'});
    } else {
      BusinessesSchema.findByIdAndUpdate(id, {$set: {status: false}}, (err, Business) => {
        return res.status(200).send({message: 'Business deleted'});
      });
    }
  });
}

function ListBusinesses(req, res) {
  BusinessesSchema.find({status: true}, (err, Businesses) => {
    if (Businesses.length == 0) {
      return res.status(202).send({message: 'No businesses to show'});
    } else {
      return res.status(200).send({message: 'Ok', businesses: Businesses});
    }
  });
}

function ListBusinessesByCategory(req, res) {
  let id = req.params.id;
  BusinessesSchema.find({categories: {category: id}}, (err, Businesses) => {
    if (Businesses.length == 0) {
      return res.status(202).send({message: 'No businesses to show'});
    } else {
      return res.status(200).send({message: 'Ok', businesses: Businesses});
    }
  });
}

module.exports = {
  LogIn,
  CreateBusiness,
  ReadBusiness,
  UpdateBusiness,
  DeleteBusiness,
  ListBusinesses,
  ListBusinessesByCategory
};