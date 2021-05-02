const http = require('./node_modules/http/package.json'),
// axios = require('axios'),
logger = require('./node_modules/morgan'),
cors = require('./node_modules/cors'),
express = require('./node_modules/express'),
bodyParser = require('./node_modules/body-parser'),
mongoose = require('./node_modules/mongoose/index'),
dotenv = require("./node_modules/dotenv");

var app = express();
app.set('view engine', 'ejs'); //registering view engine
var port = process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(cors()); //this allows access from any website
app.use(require('./routes/routes.js'));
app.use('/',express.static('css'));

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

app.get('/',(req,res)=>{
    res.render('index');
});


//link to the database in mongodb atlas
const dbURI = "mongodb+srv://GuitarCenterIreland:GuitarCenterIreland@musicstore.zjgtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//console.log(process.env);
//const dbURI = process.env.DB_URL;

//connection to the database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));