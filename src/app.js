const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const routes = require('./routes/index.routes');
require('dotenv').config();
require('./database');

// Settings
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)
app.use('/api', routes)

// Routes
app.use(require('./routes/index.routes'));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
})