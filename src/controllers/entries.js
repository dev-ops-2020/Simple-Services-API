const EntriesSchema = require('../models/entries');
const moment = require('moment');

function CreateEntry(req, res) {
  moment.locale('es');
  const date = moment().format('L');
  moment.locale('es-us');
  const time = moment().format('LT');
  const current = date + " " + time;
  let Entry = new EntriesSchema();
  Entry.image = req.body.image;
  Entry.desc = req.body.desc;
  Entry.date = current;
  Entry.status = true;
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
    if (Entries.length == 0 && !Entries.status) {
      return res.status(202).send({message: 'No entries to show'});
    } else {
      return res.status(200).send({message: 'Ok', entries: Entries});
    }
  }).sort({date: 1});
}

module.exports = {
  CreateEntry,
  ReadEntry,
  ListEntries
};