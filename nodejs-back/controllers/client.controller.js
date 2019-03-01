const Client = require('../models/client.model.js');

// Create
exports.createClient = (req, res) => {
    // Controle formulaire
    if(!req.body.company_name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }

    const client = new Client({
      company_name: req.body.company_name,
      street: req.body.street,
      city: req.body.city,
      cp: req.body.cp,
      ref_name: req.body.ref_name,
      ref_firstname: req.body.ref_firstname,
      ref_phone: req.body.ref_phone,
      ref_mail: req.body.ref_mail,
      activity_area: req.body.activity_area
    });

    client.save()
    .then(data => {
        console.log('Client created')
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error : can't save client in database"
        });
    });
};

// FindAll
exports.findAllClient = (req, res) => {
    Client.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error can't find all client"
        });
    });
};

// FindOne
exports.findOneClient = (req, res) => {
    Client.findOne({ _id: req.params.id })
   .then(client => {
       if(!client) {
           return res.status(404).send({
               message: "client not found with id " + req.params.id
           });
       }
       res.send(client);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "client not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error : id " + req.params.id + "not found"
       });
   });
};

// Update
exports.updateClient = (req, res) => {

    //Controlle formulaire
    if(!req.body.company_name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }

    Client.findOneAndUpdate({ _id: req.params.id }, {
      company_name: req.body.company_name,
      street: req.body.street,
      city: req.body.city,
      cp: req.body.cp,
      ref_name: req.body.ref_name,
      ref_firstname: req.body.ref_firstname,
      ref_phone: req.body.ref_phone,
      ref_mail: req.body.ref_mail,
      activity_area: req.body.activity_area
    })
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "client not found with id " + req.params.id
            });
        }
        res.send(client);
    })
    .catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "client not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error : id " + req.params.id + "can't be updating"
        });
    });

};

// Delete
exports.deleteClient = (req, res) => {
    Client.findOneAndRemove({ _id: req.params.id })
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "client not found with id " + req.params.id
            });
        }
        res.send({message: "client deleted"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Error : Client with id " + req.params.id + "not found"
            });
        }
        return res.status(500).send({
            message: "Couldn't delete client with id " + req.params.id
        });
    });

};
