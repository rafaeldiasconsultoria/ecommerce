var express = require('express');
var router = express.Router();
var Request = require("request");


/* GET users listing. */
router.get('/iniciarTransacao', function (req, res, next) {
    var data = '......';

    Request.post({
        "url": "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?" + process.env.PagSeguroAPIToken,
    }, (error, response, body) => {
        if (error) {
            data = error;
            //return console.dir(error);
        }
        data = JSON.parse(body);
        //console.dir(JSON.parse(body));
    });

    res.send(data);
});

module.exports = router;