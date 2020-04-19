const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  texte: String,
  number: Number
});

module.exports = mongoose.model('Test', testSchema);