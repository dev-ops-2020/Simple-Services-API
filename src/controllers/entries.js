const EntriesSchema = require('../models/entries');
const moment = require('moment');
const momentz = require('moment-timezone');

function CreateEntry(req, res) {
  moment.locale('es');
  const sv = moment.tz(moment.format(), "America/El_Salvador");
  const date = sv.format('L');
  const time = sv.format('LTS');
  const current = date + "-" + time;
  let Entry = new EntriesSchema();
  Entry.image = req.body.image;
  Entry.desc = req.body.desc;
  Entry.date = current;
  Entry.businessId = req.body.businessId;
  Entry.save((err, Entry) => {
    if (err) {
      return res.status(202).send({message: 'Error creating entry'});
    } else {
    return res.status(200).send({message: 'Entry created', entry: Entry});
    }
  });
}

function ReadEntry(req, res) {
  let id = req.params.id;
  EntriesSchema.findById(id, (err, Entry) => {
    if (!Entry) {
      return res.status(202).send({message: 'Entry not found'});
    } else if (!Entry.status) {
      return res.status(202).send({message: 'Entry deleted...'});
    } else {
      return res.status(200).send({message: 'Entry read', entry: Entry});
    }
  });
}

function ListEntries(req, res) {
  EntriesSchema.find({status: true}, (err, Entries) => {
    if (Entries.length == 0) {
      return res.status(202).send({message: 'No entries to show'});
    } else {
      return res.status(200).send({message: 'Ok', entries: Entries});
    }
  }).sort({date: -1});
}

function ListEntriesByBusiness(req, res) {
  let id = req.params.id;
  EntriesSchema.find({businessId: id}, (err, Entries) => {
    if (Entries.length == 0) {
      return res.status(202).send({message: 'No entries to show'});
    } else {
      return res.status(200).send({message: 'Ok', entries: Entries});
    }
  }).sort({date: -1});
}

function LikeEntry(req, res) {  
  let id = req.params.id;
  EntriesSchema.findByIdAndUpdate(id, {$set: {likes: likes += 1}}, (err, Entry) => {
    if (!err) {
      return res.status(200).send({message: 'Ok'});
    } else {
      return res.status(202).send({message: 'Error'});
    }
  });   
}

function UnlikeEntry(req, res) {  
  let id = req.params.id;
  EntriesSchema.findByIdAndUpdate(id, {$set: {likes: likes -= 1}}, (err, Entry) => {
    if (!err) {
      return res.status(200).send({message: 'Ok'});
    } else {
      return res.status(202).send({message: 'Error'});
    }
  });   
}

module.exports = {
  CreateEntry,
  ReadEntry,
  ListEntries,
  ListEntriesByBusiness,
  LikeEntry,
  UnlikeEntry
};