const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    company_name: String,
    street: String,
    city: String,
    cp: Number,
    ref_name: String,
    ref_firstname: String,
    ref_phone: String,
    ref_mail: String,
    activity_area: String
});

module.exports = mongoose.model('Client', ClientSchema);
