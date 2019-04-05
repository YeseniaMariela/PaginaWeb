function validar(){
	var nombre, correo, telefono, expresion;
	nombre = document.getElementsById("nombre").value;
	correo = document.getElementsById("correo").value;
	telefono = document.getElementsById("telefono").value;

	expresion = /\w+@+\w+\.+[a-z]/;
	nombre = "juan";
	document.writeln(nombre);
	if(nombre ==="" || correo ==="" || telefono ===""  ){
		alert("complete todos los campos");
		return false;
	}
	 if(nombre.length>30){
		alert("use un nombre corto");
		return false;
	}
	 if(telefono.length>10){
		alert("use  un numero válido");
		return false;
	}
	 if (isNaN(telefono)) {
		alert("ingrese un número válido");
		return false;
	}
	 if (expresion.text(correo)) {
		alert("correo invalido");
	}
}