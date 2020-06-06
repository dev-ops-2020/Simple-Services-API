const MembershipsSchema = require('../models/memberships');

function CreateMembership(req, res) {
  let Membership = new MembershipsSchema();
  Membership.name = req.body.name;
  Membership.description = req.body.description;
  Membership.color = req.body.color;
  Membership.priority = req.body.priority;
  Membership.extras = req.body.extras;
  Membership.status = req.body.status;
  Membership.price = req.body.price;
  Membership.priceOff = req.body.priceOff;
  Membership.priceExtraCoupon = req.body.priceExtraCoupon;
  Membership.quantityCoupons = req.body.quantityCoupons;
  Membership.quantityPromotions = req.body.quantityPromotions;
  Membership.save((err, Membership) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Membership created', membership: Membership });
  });
}

function ReadMembership(req, res) {
  let id = req.params.id;
  MembershipsSchema.findById(id, (err, Membership) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Membership read', membership: Membership });
  });
}

function UpdateMembership(req, res) {
  let id = req.params.id;
  let Membership = req.body;
  MembershipsSchema.findByIdAndUpdate(id, Membership, (err, Memberships) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Membership updated', membership: Membership });
  });
}

function DeleteMembership(req, res) {
  let id = req.params.id;
  let Membership = req.body;
  MembershipsSchema.findByIdAndDelete(id, Membership, (err, Memberships) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Membership deleted', membership: Membership });
  });
}

function ListMemberships(req, res) {
  MembershipsSchema.find({}, (err, Memberships) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Ok', memberships: Memberships });
  });
}

module.exports = {
  CreateMembership,
  ReadMembership,
  UpdateMembership,
  DeleteMembership,
  ListMemberships
};