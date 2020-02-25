const express = require('express');
const router = express.Router();

const index = (req, res) => {
  res.send('hello world');
}

router.get('/', index);

router.use('/cards', require('./cards-routes'));
router.use('/decks', require('./decks-routes'));

module.exports = router;
