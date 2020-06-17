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
    if (err) {
      return res.status(202).send({message: 'Error creating membership'});
    } else {
    return res.status(200).send({message: 'Membership created', membership: Membership});
    }
  });
}

function ReadMembership(req, res) {
  let id = req.params.id;
  MembershipsSchema.findById(id, (err, Membership) => {
    if (!Membership) {
      return res.status(202).send({message: 'Membership not found'});
    } else if (!Membership.status) {
      return res.status(202).send({message: 'Membership deleted...'});
    } else {
      return res.status(200).send({message: 'Membership read', membership: Membership});
    }
  });
}

function UpdateMembership(req, res) {
  let id = req.params.id;
  let Membership = req.body;
  MembershipsSchema.findByIdAndUpdate(id, Membership, (err, Memberships) => {
    if (err) {
      return res.status(202).send({message: 'Membership failed'});
    } else if (!Membership.status) {
      return res.status(202).send({message: 'Membership deleted...'});
    } else {      
      return res.status(200).send({message: 'Membership updated'});
    }
  });
}

function DeleteMembership(req, res) {
  let id = req.params.id;
  MembershipsSchema.findById(id, (err, Membership) => {
    if (!Membership) {
      return res.status(202).send({message: 'Membership not found'});
    } else {
      MembershipsSchema.findByIdAndUpdate(id, {$set: {status: false}}, (err, Membership) => {
        return res.status(200).send({message: 'Membership deleted'});
      });
    }
  });
}

function ListMemberships(req, res) {
  MembershipsSchema.find({status: true}, (err, Memberships) => {
    if (Memberships.length == 0) {
      return res.status(202).send({message: 'No memberships to show'});
    } else {
      return res.status(200).send({message: 'Ok', memberships: Memberships});
    }
  });
}

module.exports = {
  CreateMembership,
  ReadMembership,
  UpdateMembership,
  DeleteMembership,
  ListMemberships
};