var app = require('express')();
var express = require('express')
var http = require('http').createServer(app);

var functions = require('./src/functions')
var bbdd = require('./src/bbdd')


app.use(express.json())

app.post('/mutant/', (req, res) => {
    if (functions.isMutant(req.body)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
    res.end()
})

app.get('/stats/', (req, res) => {
    bbdd.select().then(rows => {
        var mutantes = 1
        if (rows[0].mutantes > 0) {
            mutantes = rows[0].mutantes
        }
        var humanos = 1
        if (rows[0].humanos > 0) {
            humanos = rows[0].humanos
        }
        ratio = mutantes / humanos
        ret = {
            count_mutant_dna : rows[0].mutantes, 
            count_human_dna : rows[0].humanos,
            ratio : ratio
        }
        res.json(ret)
        res.end()
    })
})

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!').end();
})

exports.app = app;

const PORT = process.env.PORT || 4000
http.listen(PORT, () =>{
    console.log('Listen on ', PORT)

})