const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    texte_quest: String,
    tags: [String],
    niveau: [String],
    reponses: [{ texte_rep: String, correct: Boolean }]
});

module.exports = mongoose.model('Question', questionSchema);