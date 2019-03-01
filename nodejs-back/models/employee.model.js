const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    firstname: String,
    username: String,
    birthday: String,
    street: String,
    cp: Number,
    city: String,
    phone: String,
    mail: String,
    job: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);
