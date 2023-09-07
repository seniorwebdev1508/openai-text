const express = require('express');
const router = express.Router();
const { chatCompletion } = require('../helper/openaiApi');

router.post('/message', async (req, res) => {
  try {
    const query = req.body.message;
    const result = await chatCompletion(query);
    
    // Send the result back as a response
    res.json({ response: result.response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;