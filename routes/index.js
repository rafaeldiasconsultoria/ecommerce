var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var _produtos = [
    {nome: 'Produto 1', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'} },
    {nome: 'Produto 2', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 3', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 4', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 5', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 6', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 7', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 8', valor: 123.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}}
  ];

  var _produtosPromocao = [
    {nome: 'Produto 9', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'} },
    {nome: 'Produto 10', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 11', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}}
  ];

  var _categorias = [
    {nome: 'Roupas', cor: 'rgb(17, 17, 17)'},
    {nome: 'Calçados', cor: 'rgb(17, 17, 17)'},
    {nome: 'Para festas', cor: 'rgb(17, 17, 17)'},
    {nome: 'Para baladas', cor: 'rgb(17, 17, 17)'},
    {nome: 'Acessórios', cor: 'rgb(17, 17, 17)'},
    {nome: 'OUTLET', cor: 'red'}
  ];
  res.render('index', { __banners: [{banner: '\\images\\produtos\\1.jpg'}], __produtos: _produtos, __produtosPromocao: _produtosPromocao, __categorias: _categorias  });
});

module.exports = router;
