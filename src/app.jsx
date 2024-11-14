require('dotenv').config()
const express = require('express');
const app = express();
require('./db/conn')
const port = process.env.PORT || 3000;
const hbs = require('hbs')
const path = require('path');
const User = require('./models/contactSchema')
const staticPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/view');
const partialsPath = path.join(__dirname,'../templates/partials');
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

hbs.registerPartials(partialsPath)
app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/contact',async(req,res)=>{
  try {
    const data = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,

    })

    const saveData = await data.save();
    res.status(201).render('index')
    
  } catch (error) {
    res.status(404).send(error)
  }
})
app.get('/',(req,res)=>{
  res.render('index')
})


app.listen(port,()=>{
    console.log(`port is listneing at ${port}`)
})