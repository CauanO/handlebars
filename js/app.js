var express = require('express');
var {engine} = require('express-handlebars');
var app = express();

app.get('/home.handlebars', function(req, res){
    res.render('home')
})
app.get('/sobre.handlebars', function(req, res){
    res.render('sobre')
})
app.get('/contatos.handlebars', function(req, res){
    res.render('contatos')
})

// indentificar as configurações do flamework
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.listen(8081, function() {
    console.log("Servidor ON!")
})