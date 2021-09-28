const express = require('express');
const path = require('path');

const app = express();


const publicPath = 
path.join(__dirname, './public');

app.use( express.static(publicPath));


// VARIABLED ENTORNO //
app.listen( process.env.PORT || 3000, () =>{
    console.log('Servidor corriendo en el puerto 3000')
}); 



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});  

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});  

app.post('/register', (req, res) => {
    //  GUARDAR EN BASE DE DATOS. REQ
    
   // ACA REDIRECCIONAMOS . 
    res.redirect('/home');
});



app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});  

app.post('/login', (req, res) => {
    //  GUARDAR EN BASE DE DATOS. REQ
    
   // ACA REDIRECCIONAMOS . 
    res.redirect('/home');
});