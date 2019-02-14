var express = require('express');
const app = express();
var cors = require('cors');

app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.sendfile('index.html')
})

app.get('/api/pets',(req,res)=>{
    var obj=[
        {
            name:"april",
            type:"cat",
            age:1
        },
        {
            name:"blaze",
            type:"dog",
            age:2
        }
    ]

    res.json(obj);
})

app.post('/api/pets',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000,()=>{
    console.log('3000')
});