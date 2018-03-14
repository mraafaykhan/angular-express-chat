let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express();

app.get('/', function(req,res){
    res.json({
        message:'api is up and running'
    })
})

app.listen(()=> console.log("app listening on port 3000"),3000);