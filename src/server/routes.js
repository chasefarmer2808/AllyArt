var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var https = require('https');
var config = require('./config');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/albums', getAlbums);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

function getAlbums(req, res, next) {
  var options = {
    host: 'graph.facebook.com',
    path: '/v2.6/' + config.page_id + '?access_token=' + config.access_token + '&fields=albums'
  };

  req = https.get(options, function(resp) {
    var body = '';
    resp.on('data', function(data) {
      body += data;
    });
    resp.on('end', function(err) {
      res.send(JSON.parse(body));
    });
  });

  req.on('error', function(err) {
    res.status(500).send(err);
  });
}
