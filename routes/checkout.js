var express = require('express');
var router = express.Router();

var _produtosCarrinho = [
  {nome: 'Produto 1', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'} },
  {nome: 'Produto 2', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
  {nome: 'Produto 3', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('checkout', {__produtosCarrinho: _produtosCarrinho});
});

module.exports = router;