var express = require('express');
const app = express();
var cors = require('cors');

app.use(cors())
// app.use(cors({
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': true
//   }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.urlencoded({
    extended: true
}));

app.get('/cors/get',(req,res)=>{
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers");
  res.json({name:"mukundh"})
})

app.post('/api/pets',(req,res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.listen(5500,()=>{
    console.log("5500");
})