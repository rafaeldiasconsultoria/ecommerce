var express = require('express');
var router = express.Router();

var _produtos = [];

/* GET users listing. */
router.get('/', function (req, res, next) {

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