express = require('express')
app = express()
port = 3000
Student = require('./database.js')

app.listen(port, ()=> {console.log(`working on running on ${port}`)})

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    students = await Student.find();
    res.render('index.ejs', {
        page: "CRUD with express and mongoose",
        title : "Read , & Delete Operations",
        students: students})
})

app.post('/register', async(req, res)=>{
    const {name, mail, age} = req.body;
    newstudent = new Student({
        name, mail, age
    });
    studentsave = await newstudent.save();
    res.redirect('/');
})

app.get('/register', (req, res) => {
    res.render('register')
})


app.get('/delete/:id', async(req,res)=> {
    // const {id} = req.params;
    // deleteStudent = await Student.findByIdAndDelete({_id:id});
    deleteStudent = await Student.findByIdAndDelete(req.params.id);
    res.redirect('/')
})


app.get('/edit/:id', async(req, res)=> {
    id = req.params.id;
    editStudent = await Student.findById({_id:id});
    if(editStudent==null){res.redirect('/')}
    else{res.render('edit', {students: editStudent})}
    
})

app.post('/edit/:id', async(req,res)=>{
    id = req.params.id;
    const {name, mail, age} = req.body;
    updateStudent = await Student.findByIdAndUpdate({_id:id},
    {name, mail, age}, {new: true});
    res.redirect('/')
}
)