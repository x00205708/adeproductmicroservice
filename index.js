var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

app.get('/product', async (req, res, next) => {
    res.send("This is the product MicroService")
});

const PORT = process.env.PORT || 9080;

app.listen(PORT, () => console.log(`Product MicroService running on port ${PORT}`));