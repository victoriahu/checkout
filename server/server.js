const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');



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

app.post('/accounts', (req, res) => {
    console.log(req.body.name, req.body.email, req.body.password);
    res.send(req.body.name, req.body.email, req.body.password);
})

app.listen(port, () => console.log(`Shopping checkout app listening on post ${port}`));