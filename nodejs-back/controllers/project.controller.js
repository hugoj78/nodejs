const Project = require('../models/project.model.js');

// Create and Save a new project
exports.createProject = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }
    // Create a project
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      price: req.body.price,
      status: req.body.status
    });
    // Save project in the database
    project.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error : can't create the project."
        });
    });
};

// Retrieve and return all project from the database.
exports.findAllProject = (req, res) => {

    Project.find()
    .then(projects => {
        res.send(projects);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error : can't find projects."
        });
    });
};

// Find a single project with a projectid
exports.findOneProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
   .then(project => {
       if(!project) {
           return res.status(404).send({
               message: "project not found with id " + req.params.id
           });
       }
       res.send(project);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "project not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving project with id " + req.params.id
       });
   });
};

// Update a project identified by the projectid in the request
exports.updateProject = (req, res) => {

    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }

    // Find project and update it with the request body
    Project.findOneAndUpdate({ _id: req.params.id }, {
      name: req.body.name,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      price: req.body.price,
      status: req.body.status
    })
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating project with id " + req.params.id
        });
    });

};

// Delete a project with the specified projectid in the request
exports.deleteProject = (req, res) => {
    Project.findOneAndRemove({ _id: req.params.id })
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        res.send({message: "project deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete project with id " + req.params.id
        });
    });

};
