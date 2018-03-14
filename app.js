let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express();
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.json({
        message:'api is up and running'
    })
})

app.listen(3000,()=> console.log('app listening on port 3000'));