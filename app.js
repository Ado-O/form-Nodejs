const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
//middleware - spajanje 
app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect with mysql
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'formDB',
    multipleStatements: true
});

/** 
 * GET
 */
app.get('/api', function(req, res) {
    connection.query("SELECT * FROM formdb", function(err, rows) {

        if (err) {
            console.log(err);
        }
        res.send(JSON.stringify(rows));
    });
});


/**
 * DELETE
 */
app.get('/delete/:id', function(req, res) {
    connection.query("DELETE FROM formdb WHERE id = ? ", [req.params.id], function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.post('/delete', function(req, res) {
    let id = req.body.id;
    res.redirect("/delete/" + id);
});

/*** 
 POST 
 ***/
app.post('/', function(req, res) {
    console.log('req.body');
    console.log(req.body);

    var users = {
        "name": req.body.name,
        "lName": req.body.lname,
        "mob": req.body.mob,
        "gmail": req.body.gmail,
        "state": req.body.state,
        "city": req.body.city
    }

    connection.query('INSERT INTO formdb SET ?', users, function(error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });

});
app.listen(3000);
console.log('Example app listening at port:3000');