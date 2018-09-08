var express = require('express');
var router = express.Router();
var Request = require('request');

const admin = require('firebase-admin');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.GoogleProjectId,
    clientEmail: process.env.GoogleClientEmail,
    privateKey: process.env.GooglePrivateKey
  }),
  databaseURL: process.env.GoogleDatabaseURL
});
var firestore = admin.firestore();

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
  // set header to handle the CORS
  res.header('Access-Control-Allow-Origin', '*');
  
  var _produtos = []; 
  firestore.collection('produtos').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        _produtos.push(doc.data());
        console.log(doc.data());
      });
      res.send(_produtos);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;