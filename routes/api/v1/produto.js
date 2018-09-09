var express = require('express');
var router = express.Router();
var Request = require('request');
const admin = require('firebase-admin');

var _googleCredentials = {
  'projectId': process.env.GoogleProjectId,
  'clientEmail': process.env.GoogleClientEmail,
  'privateKey':"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDWptht0cEHp7aw\n9dGyDz4KNuzgVNQkhqlpCVZq3Wg1ovHnfVg+xAd6q5CKJP+6jb4nwHrXVFTDlxB0\nO2/Ukk8YvwJU7JU1S6h5hQTgYK1aB6PPi4yQ6AIXCVSPXFMHl1xehtt7JYpeVUMX\nIOVb9Suv+NGSuTKu9PFzclHjD+ZihfuctVR/3jaUAXns4ZrrI+/Pz6BXSChPVS44\nqOD3L5HBpWyvjJSI7dAZ/6G5SN2TqUWfmR/lT4EbCojNnt1FNgXP2AUqZXGgJ1Sy\n5ZPGRKrT0DoYO7MR9XZH5rGXDR9xrIlH2WbilcazJyvxTY5QJ0usT29qplAlOgDo\neuLNRKjXAgMBAAECggEARc+Usz7VU0qKAcqpDQqlCEhtyNX9+vUq8uTdDLt+kXcx\nyrJ6+UrjDdPvmeZHn6JK1n3k1dRxDv26Fbtg9xcwj2FL/lfFfURigkcvW1RF/PJg\nJfeCW3yBdYGM1WVXAbCKE5ozlr0SX/TF8ac6wSofL8eyTVBbOgii4IOtOzZoHOFT\nBYBsOIl+maYSPYfP1BXdEfRBuS6YQKYnvLI7H+tHb3K5d0UvZ0tfJqGKnZnJ2aOO\n4CuXZbDi0awS91fBHcz0Jhf93V7FsysU6OHkuyiuDVTMwUUGuXVa331PbSmdaKzo\nSfQnXBhUeT7suS7gMwwIM8dW5eiGnaeK54Xn9tjECQKBgQDqiTwtTvlKZ8wmmjET\n8dZX4+gU1wPLS6LmhOuaG0cpSAInw59VkTru+P4Y+uN0JiTry393FcGjbs8KYHG5\ns6uaprjSLZ6M0/K40/OBEcSapv1RPa06HNxqfI6Agign6f9vtrfg2ha38V1cAKJL\ncS/xFaf4jeV8zyKWCRWC3BCt2QKBgQDqS8FvrOtMbIduaWUdRphT2oVtnQdThGKX\nUnpWfS/4Ejl8o4sD4bQ7M9F7lyWKP2W6zKRc8UCkxA6Eu6gumwjDxjgIFlJj2kEo\ntSg1oZvPp2yDHG/0IFdPoc9EDwbXitGz3mnzIm/bfqye8QpFwqwnCQZNzRSOoiu1\na/JD6x3uLwKBgQC93Bx/3SeHaSFlunqyV5qZiaBthmXG49LaY43KMfzYWTeNcxoA\nDdI0dBJWrHsGon5O92yXPWCE6gXms448s0repcqGMnHgNQ+POd0shfKu8zGr247o\ntUZlWbGOLE9PiGjEyZhvCH1NqLFX8hdvlRAnTM2uM0gsUg4AgRgN2BIUeQKBgCId\ny9n+HPkw6HucXzvnFrFHJZyze+ieY1jTirrjWcPOq45Jpil3iS4BuqQ7exzpZF/S\nArEB9D7Jya9sP+4hZyJSz7/luDOQCWLrFiLRGIYhQ/zHfEnZF72huzOW2JE0Rprh\nbR4ZSp50kKBISw2jbjv05XUYwsCOPr0ZLdrT9rTDAoGBANdA3iX+dqCxvWYRe7CH\nNEyKnhUTk0ccA1Sa9iho+myEsIEfT0bfQcpCdvcpKelXrmXKFOMnm24BwDPfhfZW\ncHEGlMifGD1HVTco+uwynrLejmnou2c6bfDDq4ZIqRs1A0B/vcZAmzbWe2XJjwhh\nLAe7as4fysmEh+Ae44WprtP1\n-----END PRIVATE KEY-----\n",
}
admin.initializeApp({
  credential: admin.credential.cert(_googleCredentials),
  "databaseURL":process.env.GoogleDatabaseURL
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