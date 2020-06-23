const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
require('dotenv').config();
require('./database');

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, );
  },
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});

app.use(morgan('dev'));
app.use(multer({storage}).single('image'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/index.routes'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});