const ServicesSchema = require('../models/services');
//este es un comentario :)
function CreateService(req, res) {
  let Service = new ServicesSchema();
  Service.name = req.body.name;
  Service.description = req.body.description;
  Service.available = req.body.available;
  Service.prices = req.body.prices;
  Service.pictures = req.body.pictures;
  Service.status = req.body.status;
  Service.categories = req.body.categories;
  Service.idBusiness = req.body.idBusiness;
  Service.save((err, Service) => {
    if (err) {
      return res.status(202).send({message: 'Error storing Service'});
    } else {
    return res.status(200).send({message: 'Service stored', service: Service});
    }
  });
}

function ReadService(req, res) {
  let id = req.params.id;
  ServicesSchema.findById(id, (err, Service) => {
    if (!Service) {
      return res.status(202).send({message: 'Service not found'});
    } else if (!Service.status) {
      return res.status(202).send({message: 'Service deleted...'});
    } else {      
      return res.status(200).send({message: 'Service read', service: Service});
    }
  });
}

function UpdateService(req, res) {
  let id = req.params.id;
  let Service = req.body;
  ServicesSchema.findByIdAndUpdate(id, Service, (err, Service) => {
    if (err) {
      return res.status(202).send({message: 'Update failed'});
    } else if (!Service.status) {
      return res.status(202).send({message: 'Service deleted...'});
    } else {      
      return res.status(200).send({message: 'Service updated'});
    }
  });
}

function DeleteService(req, res) {
  let id = req.params.id;
  ServicesSchema.findById(id, (err, Service) => {
    if (!Service) {
      return res.status(202).send({message: 'Service not found'});
    } else {
      ServicesSchema.findByIdAndUpdate(id, {$set: {status: false}}, (err, Service) => {
        return res.status(200).send({message: 'Service deleted'});
      });
    }
  });
}

function ListServices(req, res) {
  ServicesSchema.find({status: true}, (err, Services) => {
    if (Services.length == 0) {
      return res.status(202).send({message: 'No services to show'});
    } else {
      return res.status(200).send({message: 'Ok', services: Services});
    }
  });
}

function ListServicesByCategory(req, res) {
  let id = req.params.id;
  ServicesSchema.find({categories: {category: id}}, (err, Services) => {
    if (Services.length == 0) {
      return res.status(202).send({message: 'No Services to show'});
    } else {
      return res.status(200).send({message: 'Ok', Services: Services});
    }
  });
}

function ListServicesByBusiness(req, res) {
    let id = req.params.id;
    ServicesSchema.find({idEstablishment: id}, (err, Services) => {
      if (Services.length == 0) {
        return res.status(202).send({message: 'No services to show'});
      } else {
        return res.status(200).send({message: 'Ok', services: Services});
      }
    });
  }
  
function ListServicesByCategory(req, res) {
  let id = req.params.id;
  ServicesSchema.find({categories: {category: id}}, (err, Services) => {
    if (Services.length == 0) {
      return res.status(202).send({message: 'No services to show'});
    } else {
      return res.status(200).send({message: 'Ok', services: Services});
    }
  });
}

module.exports = {
  CreateService,
  ReadService,
  UpdateService,
  DeleteService,
  ListServices,
  ListServicesByBusiness,
  ListServicesByCategory
};