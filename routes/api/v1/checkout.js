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
                        ,paymentMethod: 'creditCard'
                        ,receiverEmail: process.env.PagSeguroEMail
                        ,currency: req.query.currency
                        ,extraAmount: req.query.extraAmount
                        ,itemId1: req.query.itemId1
                        ,itemDescription1: req.query.itemDescription1
                        ,itemAmount1: req.query.itemAmount1
                        ,itemQuantity1: req.query.itemQuantity1
                        ,notificationURL: process.env.PagSeguroNotificationURL
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
                        ,shippingAddressDistrict: req.query.shippingAddressDistrict
                        ,shippingAddressPostalCode: req.query.shippingAddressPostalCode
                        ,shippingAddressCity: req.query.shippingAddressCity
                        ,shippingAddressState: req.query.shippingAddressState
                        ,shippingAddressCountry: req.query.shippingAddressCountry
                        ,shippingType: '1'
                        ,shippingCost: '0.00'
                        ,creditCardToken: req.query.creditCardToken
                        ,installmentQuantity: req.query.installmentQuantity
                        ,installmentValue: req.query.installmentValue
                        ,noInterestInstallmentQuantity: req.query.noInterestInstallmentQuantity
                        ,creditCardHolderName: req.query.creditCardHolderName
                        ,creditCardHolderCPF: req.query.creditCardHolderCPF
                        ,creditCardHolderBirthDate: req.query.creditCardHolderBirthDate
                        ,creditCardHolderAreaCode: req.query.creditCardHolderAreaCode
                        ,creditCardHolderPhone: req.query.creditCardHolderPhone
                        ,billingAddressStreet: req.query.shippingAddressStreet
                        ,billingAddressNumber: req.query.shippingAddressNumber
                        ,billingAddressComplement: req.query.shippingAddressComplement
                        ,billingAddressDistrict: req.query.shippingAddressDistrict
                        ,billingAddressPostalCode: req.query.shippingAddressPostalCode
                        ,billingAddressCity: req.query.shippingAddressCity
                        ,billingAddressState: req.query.shippingAddressState
                        ,billingAddressCountry: 'BRA'

                    };

    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "url": ulrServico,
        "form": __boleto,
    }, (error, response, body) => {
        if (error) {
            res.send(error);
        }
        var transactionResponse;
        var parseString = require('xml2js').parseString;
        parseString(response.body, function (err, result) {
            transactionResponse = result;
        });

        res.send(transactionResponse);
        //res.redirect('/checkout-sucesso');
    });
});

module.exports = router;