const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customer');
const usersRoutes = require('./routes/users');
const app = express();

require('dotenv').config();

const env = process.env;
const uri = env.URI + env.USER_CLUSTER + ':' + env.PSW_CLUSTER + env.URL + env.DB_NAME + env.LAST;

//MongoDB Connection
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conn DB OK'))
    .catch(() => console.log('Connexion DB failed'));

//Erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/customer', customerRoutes);

app.use('/api/auth', usersRoutes);

module.exports = app;
