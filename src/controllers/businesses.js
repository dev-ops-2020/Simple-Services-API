const BusinessSchema = require('../models/businesses');

function CreateBusiness(req, res) {
  let Business = new BusinessSchema();
  Business.name = req.body.name;
  Business.description = req.body.description;
  Business.slogan = req.body.slogan;
  Business.owner = req.body.owner;
  Business.score = req.body.score;
  Business.status = req.body.status;
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
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: 'Business created', business: Business });
  });
}

function ReadBusiness(req, res) {
  let id = req.params.id;
  BusinessSchema.findById(id, (err, Business) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: 'Business read', business: Business });
  });
}

function UpdateBusiness(req, res) {
  let id = req.params.id;
  let Business = req.body;
  BusinessSchema.findByIdAndUpdate(id, Business, (err, Businesses) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: 'Business updated', business: Business });
  });
}

function DeleteBusiness(req, res) {
  let id = req.params.id;
  let Business = req.body;
  BusinessSchema.findByIdAndDelete(id, Business, (err, Businesses) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: 'Business deleted', business: Business });
  });
}

function ListBusinesses(req, res) {
  BusinessSchema.find({}, (err, Businesses) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: 'Ok', businesses: Businesses });
  });
}

module.exports = {
  CreateBusiness,
  ReadBusiness,
  UpdateBusiness,
  DeleteBusiness,
  ListBusinesses
};