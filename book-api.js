const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

let books = [];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);

    app.use(cors());
    app.use(bodyParser.json());

    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}));

axios.post('https://1c7a0275-b8b8-4235-b528-b1b625d0dbaa.zappsusercontent.com/appfiles/v2/1c7a0275-b8b8-4235-b528-b1b625d0dbaa/17.0/76109bc9ab21e62dc8c6a322a48e22771e741c436f3e75787fe7cac9dec51ba3/app/widget.html',{withCredentials: true}).then((req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);

    // res.redirect('https://desk.zoho.com/installExtension?extensionId=1c7a0275-b8b8-4235-b528-b1b625d0dbaa&version=11.0&hash=b2e8c876c99c38a07bf9c623a245d4a75c5710ea78610128d9c919d22d30f9a0');
});

axios.get('https://1c7a0275-b8b8-4235-b528-b1b625d0dbaa.zappsusercontent.com/appfiles/v2/1c7a0275-b8b8-4235-b528-b1b625d0dbaa/17.0/76109bc9ab21e62dc8c6a322a48e22771e741c436f3e75787fe7cac9dec51ba3/app/widget.html/data').then((req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));