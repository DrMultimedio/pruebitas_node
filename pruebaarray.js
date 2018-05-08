var s1 = {
	servicio: "s1",
	empleados: []
}
s1.empleados.push("e1");
s1.empleados.push("e2");

var s2 = {
	servicio: "s2",
	empleados: []
}
s2.empleados.push("e1");

servicios_empleados = [s1, s2];
console.log(servicios_empleados);

var k = servicios_empleados.indexOf("s2");	

var date = new Date();
console.log(date);