calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

	calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			imc.innerHTML = imcx
			console.log(imcx);
      
      if(imcx<15){ lectura.innerHTML = "Debes contactar con tu médico, estás en un estado crítico"; }
			else if(imcx<18.5){ lectura.innerHTML = "Peso inferior al normal </br> </br> TIPS: Te recomendams realizar actividad física como subir más escaleras, usar la bici o caminar, no saltarte el desayuno, aumentar el consumo de alimentos energético-proteicos como lacteos, carnes, huevos, verduras y carbohidratos. "; }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal </br> </br> ¡Sigue así! :)"; }
                
			else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Peso superior al normal</br> </br> Debes tener más cuidado con tu alimentación y realizar más actividades físicas como subir más escaleras, usar la bici o caminar. "; }
			else if(imcx>=30 && imcx<=39.9){ lectura.innerHTML = "Obesidad </br> </br>TIPS: Realiza 30 minutos de ejercicio aeróbico 5 veces por semana, logra un equilibrio entre consumo de calorías y actividad física, limita las grasas saturadas a no más del 7 % de sus calorías totales, disfruta de una alimentación con bajo contenido de colesterol comiendo carnes magras, frutas, vegetales y cereales integrales, limita el consumo de carne roja y de alimentos y bebidas con azúcar, evita el tabaco y el consumo de alcohol y controla atentamente el tamaño de las porciones.;" }
			else if(imcx>40){ lectura.innerHTML = "Debes contactar con tu médico"; }

		}else{
			alert("Debes ingresar peso y altura.")
		}

	};