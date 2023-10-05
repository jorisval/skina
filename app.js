const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catalogRoutes = require('./routes/catalog');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const orderRoutes = require('./routes/order');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const allowedDomains = [
    'http://localhost:3000',
    'http://localhost:3000/',
    'http://localhost:3001',
    'http://localhost:3001/',
    'https://skina-shop.vercel.app/',
    'https://skina-shop.vercel.app',
    'https://skina-shop-8d86490198fa.herokuapp.com/',
    'https://skina-shop-8d86490198fa.herokuapp.com',
    'http://skina-shop-8d86490198fa.herokuapp.com/',
    'http://skina-shop-8d86490198fa.herokuapp.com'
];
  

mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.MONGODB_ACCESS,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    app.use(cors({
        origin: function (origin, callback) {

            // Allow requests without origin (example, Postman requests)
            if (!origin) return callback(null, true);
            
            if (allowedDomains.indexOf(origin) === -1) {
                var msg = 'CORS policy of this site doesn\'t allow access from this origin';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }, 
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true
    }));
    

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// To serve static files of the react app
app.use(express.static(path.join(__dirname, './frontend/build')));


app.use('/api/catalog', catalogRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/order', orderRoutes);


app.use('/images/', express.static(path.join(__dirname, 'images')));
app.use('/videos/', express.static(path.join(__dirname, 'videos')));

//redirect all unknown routes towards react app index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});

module.exports = app;