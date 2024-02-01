mongoose = require("mongoose");
express = require("express");

app = express();

port = 3000;
app.listen(port, () => {console.log(`running successfully on port: ${port}`)})

mongoose.connect('mongodb://localhost:27017/edunet').then(() => {
    console.log('connected successfully')
}).catch((error)=>console.log(error));

empSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    married:{
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

employee = new mongoose.model('employee', empSchema)

deleteData = async(name) =>{
    try{
        data = await employee.deleteMany({name: name});
        console.log(data);
    }
    catch(error){console.log(error)}
} 

deleteData('Jimmy Carter')


// updateDocument = async(xyz) =>{
//     try{
//         data = await employee.updateMany({salary: xyz},
//             {
//                 $set:{
//                     name: "Jimmy Carter"
//                 }
//             })
//         console.log(data);
//     }
//     catch(error){console.log(error)}
// }

// updateDocument(40000);

// updateData = async(name) => {
//     try{
//         data = await employee.updateOne({ name:name},
//             {$set : {age : 9999}})
//     }
//     catch (error){console.log(error)}
// }

// updateData('John F Kennedy');


// readData = async()=> {
//     try{
//         //data = await employee.find({ married: true}).select({ mobile:0 }).limit(6).sort({ salary: -1 });
//         //data = await employee.findOne()
//         //data = await employee.find({ salary: {$not: {$gte: 40000}} });
//         data1 = await employee.find({married: {$not: {$eq: false}}}).countDocuments();
//         console.log(data1);
//         data2 = await employee.find({married: {$not: {$eq: false}}});
//         console.log(data2);
//     }
//     catch(error)
//     {
//         console.log(error);

//     }
// }

// readData();

// createEmp = async() =>{
//     try{
// creatE1 = new employee(
//     {

//         name: "Ashish Gupta",
//         mobile: 8889997776,
//         age: 22,
//         salary: 41000,
//         married: false
//     }
// )

// creatE2 = new employee(
//     {

//         name: "Kunjesh Yadav",
//         mobile: 7797514075,
//         age: 21,
//         salary: 38000,
//         married: false
//     }
// )

// creatE3 = new employee(
//     {

//         name: "Shamshad Hussain",
//         mobile: 7777514075,
//         age: 22,
//         salary: 39000,
//         married: false
//     }
// )


// creatE4 = new employee(
//     {

//         name: "Nand Kishor",
//         mobile: 9797514975,
//         age: 22,
//         salary: 38500,
//         married: false
//     }
// )

// empD = await employee.insertMany([creatE1,creatE2,creatE3,creatE4]);
// console.log(empD);
// }
// catch(error)
// {console.log(error);}}

// createEmp();

// creatE = new employee(
//     {
//         name: 'Mukesh Kumar',
//         mobile: 8797514075,
//         age: 20,
//         salary: 20000,
//         married: true
//     }
// )

// creatE.save();


// createEmp = async()=>{
//     try{
//         createE = new employee({
//             name:"John Doe",
//             mobile:9876543210,
//             age:28,
//             salary:10000,
//             married:true
//         });
//        empD = await createE.save();
 
//     }catch (error){
// console.log(error);
//     }
//     console.error("Employee created");
// }
 
// createEmp();
