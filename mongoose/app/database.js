mongoose = require('mongoose')

mongoose.connect("mongodb+srv://snashit:RTf1AaGAWDgVDCkz@cluster0.omut8ch.mongodb.net/?retryWrites=true&w=majority").then(()=>
{
    console.log('connected successfully')
}).catch((error)=>{console.log(error)})


Schema = mongoose.Schema({
    name: String,
    mail: String,
    age: Number
})

StudentModel = mongoose.model('Student', Schema);



module.exports = StudentModel

