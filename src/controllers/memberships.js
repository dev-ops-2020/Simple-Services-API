const MembershipsSchema = require("../models/memberships");

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
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Membership created", membership: Membership });
  });
}

function ReadMembership(req, res) {
  let id = req.params.id;
  MembershipsSchema.findById(id, (err, Membership) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Membership read", membership: Membership });
  });
}

function UpdateMembership(req, res) {
  let id = req.params.id;
  let update = req.body;
  MembershipsSchema.findByIdAndUpdate(id, update, (err, Membership) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Membership updated", membership: update });
  });
}

function DeleteMembership(req, res) {
  let id = req.params.id;
  MembershipsSchema.findById(id, (err, Membership) => {
    Membership.remove((err) => {
      if (err) res.status(500).send(message, err);
      res.status(200).send({ message: "Membership deleted", membership: Membership });
    });
  });
}

function ListMemberships(req, res) {
  MembershipsSchema.find({}, (err, Memberships) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Ok", memberships: Memberships });
  });
}

module.exports = {
  CreateMembership,
  ReadMembership,
  UpdateMembership,
  DeleteMembership,
  ListMemberships,
};
