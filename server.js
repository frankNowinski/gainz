// modules
const express         = require('express');
const app             = express();
const port            = process.env.PORT || 3000;

app.use('/api/v1', require('./app/routes')(app));

app.listen(port);
console.log(`Listening on port ${port}`);
// const bodyParser      = require('body-parser');
// const methodOverride  = require('method-override');
// const mongoose        = require('mongoose');
// const passport        = require('passport');
// const db              = require('./config/db');
// const app             = express();

// port
// const port = process.env.PORT || 3000;
//
// mongoose.connect(db.url);
// // app.use('/api/v1', require('./api')(wagner));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(express.static(__dirname + '/public'));
//
// // routes
// require('./app/routes')(app);
//
// // app.use('/api/v1', require('./app/routes')(app));
// app.listen(port);
// console.log(`Connected on port ${port}!`);
//
// exports = module.exports = app;
