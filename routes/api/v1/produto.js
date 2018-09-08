var express = require('express');
var router = express.Router();
var Request = require('request');
var _produtos = [];

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rafael-dias-93909.firebaseio.com"
});

router.options('/', function (req, res, next) {
  var headers = {};
  // set header to handle the CORS
  //headers['Access-Control-Allow-Headers'] = 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With';
  headers['Access-Contrl-Allow-Methods'] = 'PUT, POST, GET, DELETE, OPTIONS';
  headers["Access-Control-Max-Age"] = '86400';
  headers['Access-Control-Allow-Origin'] = '*';
  res.writeHead(200, headers);
  res.end();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  var headers = {};
  // set header to handle the CORS
  res.header('Access-Control-Allow-Origin', '*');
  _produtos = [{
    "nome": "Produto de Teste de Teste",
    "descricao": "Descrição do produto de teste de teste",
    "preco": "R$ 45,56",
    "precoPromocao": "R$ 34,56"
  },
  {
    "nome": "Produto de Teste de Teste",
    "descricao": "Descrição do produto de teste de teste",
    "preco": "R$ 45,56",
    "precoPromocao": "R$ 34,56"
  },
  {
    "nome": "Produto de Teste de Teste",
    "descricao": "Descrição do produto de teste de teste",
    "preco": "R$ 45,56",
    "precoPromocao": "R$ 34,56"
  }];

  res.send(_produtos);
});

module.exports = router;