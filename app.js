let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let authController = require('./controllers/auth.controller');

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