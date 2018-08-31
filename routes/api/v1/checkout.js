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
                        paymentMode: req.query.paymentMode
                        ,paymentMethod: req.query.paymentMethod
                        ,receiverEmail: req.query.receiverEmail
                        ,currency: req.query.currency
                        ,extraAmount: req.query.extraAmount
                        ,itemId1: req.query.itemId1
                        ,itemDescription1: req.query.itemDescription1
                        ,itemAmount1: req.query.itemAmount1
                        ,itemQuantity1: req.query.itemQuantity1
                        ,notificationURL: req.query.notificationURL
                        ,reference: req.query.reference
                        ,senderName: req.query.senderName
                        ,senderCPF: req.query.senderCPF
                        ,senderAreaCode: req.query.senderAreaCode
                        ,senderPhone: req.query.senderPhone
                        ,senderEmail: req.query.senderEmail
                        ,senderHash: req.query.senderHash
                        ,shippingAddressStreet: req.query.shippingAddressStreet
                        ,shippingAddressNumber: req.query.shippingAddressNumber
                        ,shippingAddressComplement: req.query.shippingAddressComplement
                        ,shippingAddressDistrict: shippingAddressDistrict
                        ,shippingAddressPostalCode: req.query.shippingAddressPostalCode
                        ,shippingAddressCity: req.query.shippingAddressCity
                        ,shippingAddressState: req.query.shippingAddressState
                        ,shippingAddressCountry: req.query.shippingAddressCountry
                        ,shippingType: req.query.shippingTypr
                        ,shippingCost: req.query.shippingCost
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

        // res.send(req.body);
        res.redirect('/checkout-sucesso');
    });
});

module.exports = router;