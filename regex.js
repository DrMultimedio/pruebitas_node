
let cosas = {};
cosas.nombre = ["guitarra", "balalaika" , "violín", "bajo", "violin"];
cosas.tipos = [];
for (let i = 0; i< cosas.nombre.length; i++){
	cosas.tipos[i] = [];
}
cosas.tipos[0] = ["flamenca" , "acústica" , "española"];
let regex_cosas_str = "";
let nombre ="";
let tipo = ""; 
let str = "Quiero ver guitarras flamencas";
console.log(str);
for (let i = 0; i<cosas.nombre.length && nombre == ""; i++){
	let regex = new RegExp(cosas.nombre[i], "i")
	if(regex.test(str)){
		nombre = cosas.nombre[i];
		for( let k = 0; k < cosas.tipos[i].length; k++){
			let regex = new RegExp(cosas.tipos[i][k], "i")
			if(regex.test(str)){
				tipo = cosas.tipos[i][k];
			}
		}
	}
}
console.log(nombre);
console.log(tipo);
