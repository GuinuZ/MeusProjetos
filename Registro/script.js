let mostrar = document.getElementById("mostrar");
let frota = document.getElementById("torta");
let peso = document.getElementById("peso");
let enviar = document.getElementById("enviar");


function inserir(torta, tara){
	if(frota.value === "" || peso.value === "" ){
		alert("Valores devem ser inseridos!")
	}else{
		mostrar.innerHTML +=`<tr>
								<td>${torta}</td>
								<td>${tara}</td>
							</tr>` ;
	frota.value = "";
	peso.value = "";
	frota.focus();
	}
};

frota.addEventListener("keyup", function(event){
	if(event.keyCode === 13){
		event.preventDefault();
		peso.focus();
	}
});
peso.addEventListener("keyup", function(event){
	if(event.keyCode === 13){
		event.preventDefault();
		enviar.click();
	}
});



function show(){
	inserir(frota.value, peso.value);
};