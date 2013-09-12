
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Caribbean CAD Sourcing' });
};

exports.portfolio = function(req, res){
    res.render('portfolio', { title: 'Our Portolio' });
};

exports.services = function(req, res){
    res.render('services', { title: 'Services' });
};

exports.about = function(req, res){
    res.render('about', { title: 'About Us' });
};