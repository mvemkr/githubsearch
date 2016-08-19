var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/firstName', function(req, res, next) {
    var client = {
        firstName: "Big",
        lastName: "Boi"
    }
    return res.json(client);
})

module.exports = router;
