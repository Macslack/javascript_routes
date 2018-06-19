const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express')
const filmRouter = new express.Router();

filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]})
});

filmRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  films.splice(index, 1);
  res.json({data: films});
});

filmRouter.put("/:id", function(req, res){
  const index = req.params.id;
  films[index] = new film(req.body);
  res.json({Data: films});
})

filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]})
});

filmRouter.get('/', function(req, res){
  res.json(films)
  res.json({AllFilms: films})
});

filmRouter.post("/", function(req, res){
  const newFilm = new Film(
    req.body
  );
  films.push(newFilm)
  res.json({Allfilms: films})
});


module.exports = filmRouter;
