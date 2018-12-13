const express = require('express');
const app = express();
const path = require('path');
const port = 3000;



// app.use('/', express.static(path.join(__dirname, './../../public')));

// app.use(express.static(path.join(__dirname, './../client')))

// app.use(express.static(path.join(__dirname, './../public')))

app.use(express.static(path.join(__dirname, './../client/dist')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'./../client/dist/index.html'));
});


app.listen(port, () => console.log(`Shopping checkout app listening on post ${port}`));