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
                    "&" + req.body;
    

                    var boleto = 'paymentMode=default';
                    boleto = boleto + '&paymentMethod=boleto';
                    boleto = boleto + '&receiverEmail=suporte@lojamodelo.com.br';
                    boleto = boleto + '&currency=BRL';
                    boleto = boleto + '&extraAmount=1.00';
                    boleto = boleto + '&itemId1=0001';
                    boleto = boleto + '&itemDescription1=Notebook Prata';
                    boleto = boleto + '&itemAmount1=24300.00';
                    boleto = boleto + '&itemQuantity1=1';
                    boleto = boleto + '&notificationURL=https://sualoja.com.br/notifica.html';
                    boleto = boleto + '&reference=REF1234';
                    boleto = boleto + '&senderName=Jose Comprador';
                    boleto = boleto + '&senderCPF=22111944785';
                    boleto = boleto + '&senderAreaCode=11';
                    boleto = boleto + '&senderPhone=56273440';
                    boleto = boleto + '&senderEmail=comprador@uol.com.br';
                    boleto = boleto + '&senderHash=abc123';
                    boleto = boleto + '&shippingAddressStreet=Av. Brig. Faria Lima';
                    boleto = boleto + '&shippingAddressNumber=1384';
                    boleto = boleto + '&shippingAddressComplement=5o andar';
                    boleto = boleto + '&shippingAddressDistrict=Jardim Paulistano';
                    boleto = boleto + '&shippingAddressPostalCode=01452002';
                    boleto = boleto + '&shippingAddressCity=Sao Paulo';
                    boleto = boleto + '&shippingAddressState=SP';
                    boleto = boleto + '&shippingAddressCountry=BRA';
                    boleto = boleto + '&shippingType=1';
                    boleto = boleto + '&shippingCost=1.00';

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
                        ,senderHash: 'abc123'
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

                    var tt = "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions?email=rafael.2dias@live.com&token=3D72C0BC2ECC499486CEC02DF7B721BD&";
    Request.post({
        "headers": {"Content-Type": "application/x-www-form-urlencoded"},
        "url": ulrServico,
        "form": __boleto,
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

module.exports = router;