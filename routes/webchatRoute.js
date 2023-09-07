const express = require('express');
const router = express.Router();
const { chatCompletion } = require('../helper/openaiApi');

router.get('/', (req, res) => {
  //html
  res.sendFile('chat_index.html', { root: 'public' });
});

module.exports = router;