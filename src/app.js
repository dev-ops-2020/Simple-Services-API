const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
require('dotenv').config();
require('./database');
/*
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, );
  },
  destination: path.json(__dirname, 'public/uploads')
});
*/
app.use(morgan('dev'));
app.use(multer(/*{storage}*/).single('image'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/index.routes'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});