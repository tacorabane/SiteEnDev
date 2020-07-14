const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const env = process.env;

const uri = env.URI + env.USER_CLUSTER + ':' + env.PSW_CLUSTER + env.URL + env.DB_NAME + env.LAST;

//MongoDB Connection
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conn DB OK'))
.catch(() => console.log('Connexion DB failed'));

/* Route GET test */
//Erreur CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: "1",
      title: "Mon premier objet",
      description: "Info",
      imageUrl: "https://exemple",
      price: 4900,
      userId: 'djskmlfds',
    }
  ];
  res.status(200).json(stuff);
});
/* End Route GET Test */

/* Route POST Test */
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !"
  });
});
/* End Route POST Test */
module.exports = app;
