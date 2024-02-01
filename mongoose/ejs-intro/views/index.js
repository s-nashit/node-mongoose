express = require('express');
app = express();
port = 3000;

app.set('view engine', 'ejs');

usern = {
    username: "nashit",
    password: '123@Patna',
    age: 25,
    admin: false
}

app.get('/', (req,res) => {
    res.render('./pages/index.ejs', {usern:usern})
    });
app.listen(port, () => {console.log(`Server running on port ${port}`)});