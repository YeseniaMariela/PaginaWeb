<?php
	$destino="lain@gmail.com";
	$nombre=$_Post["nombre"];
	$correo=$_Post["correo"];
	$telefono=$_Post["telefono"];
	$contenido="Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $mensaje;
	mail($destino,"Contacto",$contenido);
	header(string)

?>