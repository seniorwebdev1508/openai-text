const express = require('express');
const cors = require ('cors');
require('dotenv').config();

const webApp = express();
const PORT = process.env.PORT || 5000;

webApp.use (cors ());

webApp.use(express.urlencoded({ extended: true }));
webApp.use(express.json());
webApp.use((req, res, next) => {
  // console.log(`Path ${req.path} with Method ${req.method}`);
  next();
});

const webchatRoute = require('./routes/webchatRoute');
const apiRoute = require('./routes/apiRoute');

webApp.use('/', express.static('public'));
webApp.use('/api', apiRoute);
webApp.use('/webchat', webchatRoute);

webApp.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
  console.log(`End of index.js`);
});