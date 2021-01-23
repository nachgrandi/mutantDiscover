var app = require('express')();
var express = require('express')
var http = require('http').createServer(app);

var functions = require('./src/functions')


app.use(express.json())

app.post('/mutant/', (req, res) => {
    if (functions.isMutant(req.body)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
    res.end()
})

http.listen(4000, () =>{
    console.log('Listen on 4000')
})