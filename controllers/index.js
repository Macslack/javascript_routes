const express = require('express');
const router = new express.Router();

router.use('/', require('./films.js'));

router.get('/about', function(req, res){
  res.json({data: "All about us"})
});

module.exports = router;
