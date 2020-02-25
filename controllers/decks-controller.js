const Deck = require('../models/deck');

const index = async (req, res) => {
  try {
    const decks = await Deck.find();
    res.send(decks);
  } catch (err) {
    res.status(404).send(err);
  }
}

const create = async (req, res) => {
  const {
    title,
    description
  } = req.body;
  
  try {
    const newDeck = await Deck.create({ title, description });
    res.send(newDeck);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create
}
