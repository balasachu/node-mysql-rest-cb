const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(require('./router'))

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).json({status:500, message: 'internal error', type:'internal'}); 
})
  
app.listen(3000,function(){
    console.log("App listening to port 3000");
})