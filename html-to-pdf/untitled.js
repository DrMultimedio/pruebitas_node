var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./prueba/curr.html', 'utf8');
var options = { format: 'A4', "border": "35px" }; 
console.log(__dirname + "/rei.jpg");
html = html.replace("*imagen*", "https://vignette.wikia.nocookie.net/evangelion/images/1/12/Rei_Ayanami_OP.png/revision/latest/scale-to-width-down/180?cb=20120608122803");

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});