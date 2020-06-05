const express = require('express');
const app = express();
require('dotenv').config();
require('./database');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', require('./routes/index.routes'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});