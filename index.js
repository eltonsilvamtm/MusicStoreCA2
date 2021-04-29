const http = require('http'),
// axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv");

var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(cors()); //this allows access from any website
app.use(require('./routes'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//link to the database in mongodb atlas
const dbURI = "mongodb+srv://GuitarCenterIreland:GuitarCenterIreland@musicstore.zjgtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//console.log(process.env);
//const dbURI = process.env.DB_URL;

//connection to the database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));