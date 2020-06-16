const UsersSchema = require('../models/users');
const bcrypt = require('bcrypt');
const service = require('../services/index');

function SignUp(req, res) {
  let User = new UsersSchema();
  User.name = req.body.name;
  User.alias = req.body.alias;
  User.phone = req.body.phone;
  User.email = req.body.email;
  User.password = req.body.password;
  User.rol = req.body.rol;

  bcrypt.hash(User.password, bcrypt.genSaltSync(7), (err, hash) => {
    User.password = hash;
    User.save((err) => {
      if (err) {
        return res.status(500).send({message: 'Error creating account'});
      } else {
      return res.status(200).send({message: 'Register complete', user: User, token: service.createToken(User)});
      }
    })
  });  
}

function SignIn(req, res) {
  let alias = req.body.alias;
  let password = req.body.password;
  UsersSchema.findOne({alias: alias}, (err, User) => {
    if (!User) {
      return res.status(500).send({message: 'User not found'});
    } else {
      bcrypt.compare(password, User.password, function(err, match) {
        if (!match) {
          return res.status(500).send({message: 'Passwords do not match'});
        } else {
          return res.status(200).send({message: 'SignUp succesfully', user: User, token: service.createToken(User)});
        }     
      });
    }
  });  
}

function ReadUser(req, res) {
  let id = req.params.id;
  UsersSchema.findById(id, (err, User) => {
    if (!User) {
      return res.status(500).send({message: 'User not found'});
    } else if (!User.status) {
      return res.status(500).send({message: 'User deleted...'});
    } else {      
      return res.status(200).send({message: 'User read', user: User});
    }
  });
}

function UpdateUser(req, res) {
  let id = req.params.id;
  let User = req.body;
  UsersSchema.findByIdAndUpdate(id, User, (err, User) => {
    if (err) {
      return res.status(500).send({message: 'Update failed'});
    } else if (!User.status) {
      return res.status(500).send({message: 'User deleted...'});
    } else {      
      return res.status(200).send({message: 'User updated'});
    }
  });
}

function DeleteUser(req, res) {
  let id = req.params.id;
  UsersSchema.findById(id, (err, User) => {
    if (!User) {
      return res.status(500).send({message: 'User not found'});
    } else {
      UsersSchema.findByIdAndUpdate(id, {$set: {status: false}}, (err, User) => {
        return res.status(200).send({message: 'User deleted'});
      });
    }
  });
}

function ListUsers(req, res) {
  UsersSchema.find({status: true}, (err, Users) => {
    if (Users.length == 0) {
      return res.status(500).send({message: 'No users to show'});
    } else {
      return res.status(200).send({message: 'Ok', users: Users});
    }
  });
}

module.exports = {
  SignUp,
  SignIn,
  ReadUser,
  UpdateUser,
  DeleteUser,
  ListUsers
};