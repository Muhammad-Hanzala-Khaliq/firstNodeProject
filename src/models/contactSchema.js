const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
     type:String,
     required:true,
     validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Invalid Email')
        }
     }
    },
    phone:{
        type:Number,
        required:true,
        // max:10
    },
    message:{
        type:String,
        required:true,
        min:3
    },
    date: {
        type: Date,
        default: Date.now // Automatically set the current date when a document is created
    }
})

const User = new mongoose.model("ContactForm",contactSchema);
module.exports = User;