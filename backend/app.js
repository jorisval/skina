const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catalogRoutes = require('./routes/catalog');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const orderRoutes = require('./routes/order');
const path = require('path');

mongoose.connect('mongodb+srv://jorisawoui:skinadatabase007@skinadb.m1xcpjy.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/catalog', catalogRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/order', orderRoutes);


app.use('/images/', express.static(path.join(__dirname, 'images')));
app.use('/videos/', express.static(path.join(__dirname, 'videos')));

module.exports = app;