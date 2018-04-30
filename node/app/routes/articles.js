var express = require('express');
var router = express.Router();

var db = require('../modules/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('select * from articles limit 10', function (error, results, fields) {
    if (error) throw error;
    res.render('articles', { title: 'articles', articles: results });
  })
})

router.get('/:id', function(req, res, next) {
  db.query('select * from articles where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    if (results.length == 0) res.show('No article');
    else res.render('articles/show', { title: 'article', article: results[0] });
  })
})
module.exports = router;
