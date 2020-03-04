const Card = require('../models/card');
const Deck = require('../models/deck');

const index = async (req, res) => {
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (err) {
    res.status(404).send(err);
  }
}

const create = async (req, res) => {
  const {
    deckId,
    question,
    answer
  } = req.body;
  
  try {
    // const newCard = await Card.create({ question, answer });
    await Deck.updateOne(
      { _id: deckId },
      { $push: { cards: { question, answer } } },
    );
    // res.send(newCard);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create
}
