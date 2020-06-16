const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/index.routes'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});