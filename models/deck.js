const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cards: {
      type: Array
    }
  },
  {
    timestamps: true
  }
);

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
