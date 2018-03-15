let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let authController = require('./controllers/auth.controller');
let mongoose = require('mongoose');



// todo create a mongoose container and connect mongosoe to it

mongoose.connect("mongodb://localhost:27000/triangles")
let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.json({
        message:'api is up and running'
    })
})
app.use('/user', authController);


app.listen(3000,()=> console.log('app listening on port 3000'));