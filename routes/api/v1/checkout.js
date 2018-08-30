var express = require('express');
var router = express.Router();
var Request = require('request');

// CORS
// TODO: achar solução melhor
router.options('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
});

router.get('/', function (req, res, next) {
    var data = '';
    var ulrServico = process.env.PagSeguroWS + 
                    "/sessions?email=" + process.env.PagSeguroEMail + 
                    "&token=" + process.env.PagSeguroAPIToken;
    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "url": ulrServico,
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        
        var parseString = require('xml2js').parseString;
        parseString(response.body, function (err, result) {
            data = result;
        });

        res.send(data);
    });
});

router.post('/', function (req, res, next) {
    console.log('req body: ' + req.body);
    var data = '';
    var ulrServico = process.env.PagSeguroWS + 
                    "/transactions?email=" + process.env.PagSeguroEMail + 
                    "&token=" + process.env.PagSeguroAPIToken +
                    "";
    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded", "charset": "ISO-8859-1"},
        "url": ulrServico,
        "body": req.body,
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        
        var parseString = require('xml2js').parseString;
        // parseString(response.body, function (err, result) {
        //     data = result;
        // });

        res.send(result);
    });
});

module.exports = router;