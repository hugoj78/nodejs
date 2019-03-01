const Employee = require('../models/employee.model.js');

// Create and Save a new employee
exports.createEmployee = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }
    // Create a employee
    const employee = new Employee({
      name: req.body.name,
      firstname: req.body.firstname,
      username: req.body.username,
      birthday: req.body.birthday,
      street: req.body.street,
      cp: req.body.cp,
      city: req.body.city,
      phone: req.body.phone,
      mail: req.body.mail,
      job: req.body.job
    });
    // Save employee in the database
    employee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error : can't create the employee."
        });
    });
};

// Retrieve and return all employee from the database.
exports.findAllEmployee = (req, res) => {

    Employee.find()
    .then(employees => {
        res.send(employees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error : can't find employees."
        });
    });
};

// Find a single employee with a employeeid
exports.findOneEmployee = (req, res) => {
    Employee.findOne({ _id: req.params.id })
   .then(employee => {
       if(!employee) {
           return res.status(404).send({
               message: "employee not found with id " + req.params.id
           });
       }
       res.send(employee);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "employee not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving employee with id " + req.params.id
       });
   });
};

// Update a employee identified by the employeeid in the request
exports.updateEmployee = (req, res) => {

    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "name content can't be empty"
        });
    }

    // Find employee and update it with the request body
    Employee.findOneAndUpdate({ _id: req.params.id }, {
      name: req.body.name,
      firstname: req.body.firstname,
      username: req.body.username,
      birthday: req.body.birthday,
      street: req.body.street,
      cp: req.body.cp,
      city: req.body.city,
      phone: req.body.phone,
      mail: req.body.mail,
      job: req.body.job
    })
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "employee not found with id " + req.params.id
            });
        }
        res.send(employee);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating employee with id " + req.params.id
        });
    });

};

// Delete a employee with the specified employeeid in the request
exports.deleteEmployee = (req, res) => {
    Employee.findOneAndRemove({ _id: req.params.id })
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "employee not found with id " + req.params.id
            });
        }
        res.send({message: "employee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete employee with id " + req.params.id
        });
    });

};
