const express = require('express');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);


const { Comic } = require('./models/comic');


app.use(bodyParser.json());
app.use(cookieParser());


app.get('/api/getComic',(req, res)=>{
    let id = req.query.id;

    Comic.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/comics', (req,res)=>{
    /// localhost:3001/api/comics?skip=0&limit=3&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Comic.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})
//POST

app.post('/api/comic', (req, res)=> {
    const comic = new Comic (req.body)

    comic.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            comicId: doc._id
        })
            
    })
})

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("SERVER RUNNING")
})