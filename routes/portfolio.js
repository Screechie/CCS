
/*
 * GET Portfolio page.
 */

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Our Portolio' });
};