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
                    "&token=" + process.env.PagSeguroAPIToken;
  
                    var __boleto = {
                        paymentMode: 'default'
                        ,paymentMethod: 'boleto'
                        ,receiverEmail: 'suporte@lojamodelo.com.br'
                        ,currency: 'BRL'
                        ,extraAmount: '1.00'
                        ,itemId1: '0001'
                        ,itemDescription1: 'Notebook Prata'
                        ,itemAmount1: '24300.00'
                        ,itemQuantity1: '1'
                        ,notificationURL: 'https://sualoja.com.br/notifica.html'
                        ,reference: 'REF1234'
                        ,senderName: 'Jose Comprador'
                        ,senderCPF: '22111944785'
                        ,senderAreaCode: '11'
                        ,senderPhone: '56273440'
                        ,senderEmail: 'comprador@uol.com.br'
                        ,senderHash: req.query.senderHash
                        ,shippingAddressStreet: 'Av. Brig. Faria Lima'
                        ,shippingAddressNumber: '1384'
                        ,shippingAddressComplement: '5o andar'
                        ,shippingAddressDistrict: 'Jardim Paulistano'
                        ,shippingAddressPostalCode: '01452002'
                        ,shippingAddressCity: 'Sao Paulo'
                        ,shippingAddressState: 'SP'
                        ,shippingAddressCountry: 'BRA'
                        ,shippingType: '1'
                        ,shippingCost: '1.00'
                    };

    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "url": ulrServico,
        "form": __boleto,
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        
        var parseString = require('xml2js').parseString;
        // parseString(response.body, function (err, result) {
        //     data = result;
        // });

        res.send(req.body);
    });
});

module.exports = router;