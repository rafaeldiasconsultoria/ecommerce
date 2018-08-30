var express = require('express');
var router = express.Router();
var Request = require("request");


/* GET users listing. */
router.get('/iniciarTransacao', function (req, res, next) {
    var data = '......';
    var ulrServico = process.env.PagSeguroWS + 
                    "/sessions?email=" + process.env.PagSeguroEMail + 
                    "&token=" + process.env.PagSeguroAPIToken;
    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "url": ulrServico,
    }, (error, response, body) => {
        if (error) {
            //data = error;
            res.send(error);
        }
        data = response.body;
        res.send(data);
    });
});

module.exports = router;