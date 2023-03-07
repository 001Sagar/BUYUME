const express = require('express');
const app = express();
const port = 8000;

// require the database
const sb = require('./config/mongoose');

//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.send("Yeah server is run");
})

const router = require('./routes/routeuser')
app.use('/product',router);

app.listen(port,function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("Yeah server is run on port::",port);
})