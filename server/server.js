const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./../db/index.js');


// app.use('/', express.static(path.join(__dirname, './../../public')));

// app.use(express.static(path.join(__dirname, './../client')))

// app.use(express.static(path.join(__dirname, './../public')))

app.use(express.static(path.join(__dirname, './../client/dist')));

app.use(bodyParser.urlencoded({
    extended: false
 }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'./../client/dist/index.html'));
});

app.post('/address', (req, res) => {
    console.log("whoooooaaaaaaaaaa", req.body);
    var addr = req.body;
    var sql = 'INSERT INTO account_address (lineOne, lineTwo, city, addressState, zip, phone_number) VALUES (?, ?, ?, ?, ?, ?)'
    db.query(sql, [addr.lineOne, addr.lineTwo, addr.city, addr.state, addr.zip, addr.phonenumber], (err, data) => {
        if (err) {
            throw (err);
        }
        res.send("this worked");
    })

})

app.get('/confirmation', (req, res) => {
    var sql = 'SELECT a.username, a.email, s.lineOne, s.lineTwo, s.city, s.addressState, s.zip, s.phone_number FROM account a JOIN account_address s ON a.account_id = s.address_id';
    db.query(sql, (err, data) => {
        if (err) {
            throw (err);
        }
        // console.log("this is da typeofdata man", typeof data);
        // console.log("sugar and spice make everything nice this is the data", data[data.length -1]);
        res.send(data);
    })
    // res.send('{"username": "vicky", "email": "mark"}');
})


app.post('/accounts', (req, res) => {
    // console.log(req.body, req.body.username, req.body.email, req.body.password);
    var sql = 'INSERT INTO account (username, email, password) VALUES (?, ?, ?)';

    db.query(sql, [req.body.username, req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.log('/accounts to account table post error', err);
            throw (err);
        }
        res.send('yay');
    })
    // res.send(req.body.name, req.body.email, req.body.password);


})

app.listen(port, () => console.log(`Shopping checkout app listening on post ${port}`));