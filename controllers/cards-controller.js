const Card = require('../models/card');

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
    title,
    description
  } = req.body;
  
  try {
    const newCard = await Card.create({ title, description });
    res.send(newCard);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create
}
