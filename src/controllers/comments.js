const CommentsSchema = require('../models/comments');

function CreateComment(req, res) {
  let Comment = new CommentsSchema();
  Comment.comment = req.body.comment;
  Comment.date = req.body.date;
  Comment.idUser = req.body.idUser;
  Comment.nameUser = req.body.nameUser;
  Comment.pictureUser = req.body.pictureUser;
  Comment.idBusiness = req.body.idBusiness;
  Comment.save((err, Comment) => {
    if (err) res.status(500).send({message: err});
    res.status(200).send({ message: 'Comment created', comment: Comment });
  });
}

function ReadComment(req, res) {
  let id = req.params.id;
  CommentsSchema.findById(id, (err, Comment) => {
    if (err) res.status(500).send({message: err});
    res.status(200).send({ message: 'Comment read', comment: Comment });
  });
}

function UpdateComment(req, res) {
  let id = req.params.id;
  let Comment = req.body;
  CommentsSchema.findByIdAndUpdate(id, Comment, (err, Comment) => {
    if (err) res.status(500).send({message: err});
    res.status(200).send({ message: 'Comment updated', comment: Comment });
  });
}

function DeleteComment(req, res) {
  let id = req.params.id;
  let Comment = req.body;
  CommentsSchema.findByIdAndDelete(id, Comment, (err, Categories) => {
    if (err) res.status(500).send({message: err});
    res.status(200).send({ message: 'Comment deleted', comment: Comment });
  });
}

function ListComments(req, res) {
  CommentsSchema.find({}, (err, Comments) => {
    if (err) res.status(500).send({message: err});
    res.status(200).send({ message: 'Ok', comments: Comments });
  });
}

module.exports = {
  CreateComment,
  ReadComment,
  UpdateComment,
  DeleteComment,
  ListComments
};