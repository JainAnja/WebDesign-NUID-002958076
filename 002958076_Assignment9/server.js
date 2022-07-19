const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const passport = require('passport');
const { loginCheck } = require('./api/auth/passport');
loginCheck(passport);


// const database = process.env.ATLAS_URI;
const database ="mongodb+srv://Admin:admin@test-cluster.28scz.mongodb.net/webdesign";
console.log("Database connection url"+ database);
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('MongoDB connected sucessfuly'))
.catch(err => console.log(err));

const session = require('express-session');

app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));

app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', require('./api/routes/login'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT));







