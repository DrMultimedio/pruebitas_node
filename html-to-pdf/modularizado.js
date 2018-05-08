var fs = require('fs');
var pdf = require('html-pdf');
var datos = fs.readFileSync('./prueba/datos-personales.html', 'utf8');
var experiencia_header = fs.readFileSync('./prueba/experiencia-header.html', 'utf8');
var experiencia_body = fs.readFileSync('./prueba/experiencia-body.html', 'utf8');
var sectionFooter = fs.readFileSync('./prueba/exp-form-skill-footer.html', 'utf8');
var footer = fs.readFileSync('./prueba/footer.html', 'utf8');
var formacion = fs.readFileSync('./prueba/formacion.html', 'utf8');
var habilidades = fs.readFileSync('./prueba/habilidades.html', 'utf8');
var head = fs.readFileSync('./prueba/head.html', 'utf8');


html = head + datos + formacion + experiencia_header + experiencia_body + experiencia_body + experiencia_body +  sectionFooter +habilidades + footer; 
fs.writeFileSync('pruebinha.html', html, 'utf-8');

var options = { format: 'A4', "border": "35px" }; 
console.log(__dirname + "/rei.jpg");
html = html.replace("*imagen*", "https://vignette.wikia.nocookie.net/evangelion/images/1/12/Rei_Ayanami_OP.png/revision/latest/scale-to-width-down/180?cb=20120608122803");

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});