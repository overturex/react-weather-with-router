var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// redirect https to http for OpenWeatherMapService to work
app.use(function(req, res, next){

  if(req.headers['x-forwarded-proto'] === 'https' || req.secure){
    res.redirect('http://' + req.hostname + req.url);
  }
  else{
    next();
  }

});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('running at port ' + PORT);
});
