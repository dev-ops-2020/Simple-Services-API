const BusinessesSchema = require('../models/businesses');

function CreateBusiness(req, res) {
  let Business = new BusinessesSchema();
  Business.name = req.body.name;
  Business.description = req.body.description;
  Business.slogan = req.body.slogan;
  Business.owner = req.body.owner;
  Business.score = req.body.score;
  Business.logo = req.body.logo;
  Business.pictures = req.body.pictures;
  Business.phones = req.body.phones;
  Business.schedule = req.body.schedule;
  Business.networks = req.body.networks;
  Business.categories = req.body.categories;
  Business.latitude = req.body.latitude;
  Business.longitude = req.body.longitude;
  Business.idMembership = req.body.idMembership;
  Business.save((err, Business) => {
    if (err) {
      return res.status(204).send({message: 'Error creating business'});
    } else {
    return res.status(200).send({message: 'Business created', business: Business});
    }
  });
}

function ReadBusiness(req, res) {
  let id = req.params.id;
  BusinessesSchema.findById(id, (err, Business) => {
    if (!Business) {
      return res.status(204).send({message: 'Business not found'});
    } else if (!Business.status) {
      return res.status(204).send({message: 'Business deleted...'});
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
      return res.status(204).send({message: 'Update failed'});
    } else if (!Business.status) {
      return res.status(204).send({message: 'Business deleted...'});
    } else {      
      return res.status(200).send({message: 'Business updated'});
    }
  });
}

function DeleteBusiness(req, res) {
  let id = req.params.id;
  BusinessesSchema.findById(id, (err, Business) => {
    if (!Business) {
      return res.status(204).send({message: 'Business not found'});
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
      return res.status(204).send({message: 'No businesses to show'});
    } else {
      return res.status(200).send({message: 'Ok', businesses: Businesses});
    }
  });
}

function ListBusinessesByCategory(req, res) {
  let id = req.params.id;
  BusinessesSchema.find({categories: {category: id}}, (err, Businesses) => {
    if (Businesses.length == 0) {
      return res.status(204).send({message: 'No businesses to show'});
    } else {
      return res.status(200).send({message: 'Ok', businesses: Businesses});
    }
  });
}

module.exports = {
  CreateBusiness,
  ReadBusiness,
  UpdateBusiness,
  DeleteBusiness,
  ListBusinesses,
  ListBusinessesByCategory
};