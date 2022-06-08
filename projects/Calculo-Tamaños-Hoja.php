<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<title>Calculo</title>
</head>
<body style="background-image: url('https://i.blogs.es/e1feab/google-fotos/1024_2000.jpg');  background-repeat: no-repeat; background-size: 100vw 100vh">
	<div class="container bg-dark">
		<div class="row">
			<h1 class="col-12 text-danger pt-5 text-center">CALCULAR REDUCCI&Oacute;N O AMPLIACI&Oacute;N</h1>
			<h3 class="col-12 text-white-50 pt-5">Medidas de la hoja</h3>	
			<div class="col-6">
				<label class="text-white-50" for="largo1">LARGO</label>
				<input class="w-50" type="text" id="largo1" placeholder="Ingrese el largo de medida" style="outline: none; border-bottom: 3px solid #dc3545;">
			</div>	
			<div class="col-6">
				<label class="text-white-50" for="ancho1">ANCHO</label>
				<input class="w-50" type="text" id="ancho1" placeholder="Ingrese el ancho de medida" style="outline: none; border-bottom: 3px solid #dc3545;">
			</div>	
			<h3 class="col-12 text-white-50 pt-5">Medidas de la hoja a reducir o ampliar</h3>
			<div class="col-6">
				<label class="text-white-50" for="largo2">LARGO</label>
				<input class="w-50" type="text" id="largo2" placeholder="Ingrese el largo de medida" style="outline: none; border-bottom: 3px solid #dc3545;">
			</div>	
			<div class="col-6">
				<label class="text-white-50" for="ancho2">ANCHO</label>
				<input class="w-50" type="text" id="ancho2" placeholder="Ingrese el ancho de medida" style="outline: none; border-bottom: 3px solid #dc3545;">
			</div>	

			<input class="col-12 btn btn-danger btn-block w-75 mx-auto my-5" type="button" id="calcular1" value="CALCULAR">
			
			<div class="col-6">
				<span class="text-white-50 text-center" style="text-size:20px" id="calculo1"></span><br>
				<span class="text-white-50 text-center" style="text-size:20px" id="medida1"></span><br>
				<span class="badge bg-danger ms-4 mt-3 mb-5" style="transform: scale(2);" id="porcentaje1"></span>
				<div class="col-6 text-center w-100 text-white-50" id="desc1"></div>
			</div>
			<div class="col-6">
				<span class="text-white-50 text-center" style="text-size:20px" id="calculo2"></span><br>
				<span class="text-white-50 text-center" style="text-size:20px" id="medida2"></span><br>
				<span class="badge bg-danger ms-4 mt-3 mb-5" style="transform: scale(2);" id="porcentaje2"></span>
				<div class="col-6 text-center w-100 text-white-50" id="desc2"></div>
			</div>
			<div class="col-12 text-white-50 text-center" id="mensaje"></div>
			
		</div>
	</div>
	<script src="calcular.js" type="text/javascript"></script>
</body>
</html>
