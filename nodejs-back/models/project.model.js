const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: String,
    description: String,
    start_date: String,
    end_date: String,
    price: Number,
    status: String
});

module.exports = mongoose.model('Project', ProjectSchema);
