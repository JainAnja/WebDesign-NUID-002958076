const express = require('express');
const app = express();
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();

const path = require('path');
const dbo = require('./api/config');

const session = require('express-session');
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4111;
app.listen(PORT, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err); 
    });
    console.log(`Server is running on port: ${PORT}`);
  });

app.use('/', require('./api/routes/login'));








