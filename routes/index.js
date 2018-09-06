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
    {nome: 'Produto 8', valor: 123.45, descricao: 'Produto Teste de teste de teste de teste de teste de teste', imagens: {principal: '\\images\\produtos\\Asset.jpg'}}
  ];

  var _produtosPromocao = [
    {nome: 'Produto 9', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'} },
    {nome: 'Produto 10', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 11', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}}
  ];

  var _categorias = [
    {nome: 'Categoria 1', cor: 'rgb(17, 17, 17)'},
    {nome: 'Categoria 2', cor: 'rgb(17, 17, 17)'},
    {nome: 'Categoria 3', cor: 'rgb(17, 17, 17)'},
    {nome: 'Categoria 4', cor: 'rgb(17, 17, 17)'},
    {nome: 'Categoria 5', cor: 'rgb(17, 17, 17)'},
    {nome: 'Categoria 6', cor: 'red'}
  ];

  var _produtosCarrinho = [
    {nome: 'Produto 9', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'} },
    {nome: 'Produto 10', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}},
    {nome: 'Produto 11', valor: 123.45, desconto: 98.45, descricao: 'Produto Teste de teste', imagens: {principal: '\\images\\produtos\\2.jpg'}}
  ];

  var _banners = [
    {banner: '/images/banner-home.jpg', url: '#teste-url'},
  ];

  res.render('index', { __banners: _banners, __produtos: _produtos, __produtosPromocao: _produtosPromocao, __categorias: _categorias, __produtosCarrinho: _produtosCarrinho  });
});

module.exports = router;
