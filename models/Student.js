const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    identificationCard: {type: String},
    names: {type: String},
    surnames: {type: String},
    career: {type: String},
    semester: {type: String}
});

module.exports = Student = mongoose.model('Student', StudentSchema);