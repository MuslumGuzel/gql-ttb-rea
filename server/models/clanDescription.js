const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clanDescription = new Schema({
    title: String,
    description: String,
    createDate: Date
});

module.exports = mongoose.model('ClanDescription', clanDescription);