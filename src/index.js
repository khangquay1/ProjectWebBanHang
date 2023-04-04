const express = require('express');
const { engine } = require ('express-handlebars'); 
const path = require('path')

//import
const route = require('./routes/index')

//Config
const app = express();
const port = 3000;

//Template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));
console.log(path.join(__dirname,'resources/views'));

//Set public forder
app.use(express.static(path.join(__dirname,'public')))

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/`)
});