const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override')
const userRoutes = require('./routes/user-routes');
const userApiRoutes = require('./routes/api-user-routes');
const createPath = require('./helpers/create-path');

const errorMsg = chalk.bgRedBright;
const successMsg = chalk.bgGreen;

const app = express();

app.set('view engine' , 'ejs');
 
mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser : true , useUnifiedTopology: true})
  .then((res) => console.log(successMsg('Connected to Db')))
  .catch((error) => console.log(errorMsg(error)));


app.listen(process.env.PORT , (error) => {
    error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({ extended: false}));

app.use(express.static('styles'));

app.use(methodOverride('_method'))

app.get('/' , (req, res) => {
    const title = 'Home';
    res.render(createPath('index') , {title});
});

app.get('/home' , (req, res) => {
    const title = 'Home';
    res.render(createPath('index') , {title});
});

app.use(userRoutes);
app.use(userApiRoutes);

app.use((req, res) => {
    const title = 'Error Page';
    res
    .status(404)
    .render(createPath('error') , {title})
});