const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

//database
const db = require('./models');


//----------------------------------MIDDLEWARE------------------------------//

//parse urlencoded form data
app.use(bodyParser.urlencoded({extended: true}));
//parse json data
app.use(bodyParser.json());

//serve public directory
app.use(express.static(__dirname + '/public'))



//----------------------------------ROUTES------------------------------//


// GET Root Route
app.get('/', (req, res) => {
    res.send(`<h1>Against All AUTH</h1>`);
});



//----------------------------------START SERVER------------------------------//


app.listen(PORT, () => {
    console.log(`Sitting by the pool, but ready at port ${PORT} when you need me.`);
});