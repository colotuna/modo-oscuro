let empleados = [{
	id: 1,
	nombre: 'Karmen',

},
{
	id: 2,
	nombre: 'Manuel',
	
},
{
	id: 3,
	nombre: 'Rafael',
	
}];
let salarios = [{
	id: 1,
	salario: 2000
},{
	id:2,
	salario: 4900
}];

let getEmpleado = (id,callback) =>{
	let empleadoDB = empleados.find(
		empleado => empleado.id === id)
			console.log(empleadoDB);
		}
getEmpleado(2);