$(document).ready(

function(){
	//$("#mostrar").empty();

alert("ヴァラのぺーじです。\nよろしくお願いし。\nこれはアラートです。");

$("#cargar").click(function(){

	alert("Estás entrando a...");
	$("#contenido").load("http://valeriacarrillo.github.io/");
});

$("#Ajax").click(function(){

  $.ajax({
		url: "https://andreihelo-restful-api.herokuapp.com/students",
		success: function(result, status, xhr){

			$("#contenido").text(JSON.stringify(result))
}

	});
	});

	$("#listar").click(function () {
		$("#contenido").empty();
		 $.ajax({
			 url: "https://andreihelo-restful-api.herokuapp.com/students",
			 success: function (result, status, xhr) {
				 $("#contenido").append(
					 "<th>id</th>" + "<th>Matrícula</th>" + "<th>Nombre</th>" + "<th>Apellido</th>" + "<th>Status</th>" + "<th>Eliminar</th>"
					 );
					 for (var i = 0; i < 50; i++) {
	           $("#contenido").append(
	             "<tr><td>" + result[i].id + "</td><td>" + result[i].registration_number + "</td><td>" + result[i].name +
	             "</td><td>" + result[i].last_name + "</td><td>" + result[i].status + "</td><td>" +  "<button id='borrar'>Borrar</button>" + "</td></tr>"
	           );
	         }
			 }
		 });
	 });

	 $("#actualizar").click(function () {
		 $("#contenido").empty();
 		 $.ajax({
 			 url: "https://andreihelo-restful-api.herokuapp.com/students",
 			 success: function (result, status, xhr) {
 				 $("#contenido").append(
 					 "<th>id</th>" + "<th>Matrícula</th>" + "<th>Nombre</th>" + "<th>Apellido</th>" + "<th>Status</th>" + "<th>Eliminar</th>"
 					 );
 					 for (var i = 0; i < 50; i++) {
 	           $("#contenido").append(
 	             "<tr><td>" + result[i].id + "</td><td>" + result[i].registration_number + "</td><td>" + result[i].name +
 	             "</td><td>" + result[i].last_name + "</td><td>" + result[i].status + "</td><td>" + "<button id='borrar'>Borrar</button>" + "</td></tr>"
 	           );
 	         }
 			 }
 		 });
 	 });

	 $("#crear").click(function() {
		 $("#mostrar").fadeIn("slow");
		 $("#mostrar").css("visibility","visible");
		 $("#mostrar").css("top", "70px");
		 $("#mostrar").css("left", "0");
		 $("#mostrar").css("right", "0");
		 $("#mostrar").css("margin-right", "auto");
		 $("#mostrar").css("margin-left",  "auto");
		 $("#mostrar").animate({
		 marginLeft: "auto",
		 fontSize: "14px",
		 borderWidth: "10px",
		 width: "900px"
	 }, 500 );
		 $("#cuadros").animate({
		 margin: "235px auto"
	 }, 500 );

});
			 /*$.post("https://andreihelo-restful-api.herokuapp.com/students", {registration_number: 259605,name: "Kitaro",last_name: "Gegege",status: "°o°"}, "json", function(result){
		         $("span").text(JSON.stringify(result))
		     });
		 	*/
$("aceptar").click(function() {
	var matricula = $('input[id=matricula]').val();
 var nombre = $('input[id=nombre]').val();
 var apellido = $('input[id=apellido]').val();
 var status = $( '#status option:selected' ).val();
	var mensaje = "Error(es) destectado(s) \n";
	 var ban=0;

if((matricula.length === 0)||(matricula.length < 6)){
		alert("No ingresó la matrícula");
		if((matricula.length > 6)){
		 alert("La matrícula debe ser de 6 dígitos.");
		}

 }
 if(nombre.length === 0){
	 mensaje = mensaje + "- Falta Nombre\n";
 }
 if(apellido.length === 0){
	 mensaje = mensaje + "- Falta Apellido\n";
	 }
	 if(status  === $('#status option:first').val()){
		mensaje = mensaje + "- Falta status\n";
			 ban++;
	 }

	 if(mensaje.length > 26){
			 alert(mensaje);
	 }

if((matricula.length > 0)&&(nombre.length > 0)&&(apellido.length > 0)&&(ban === 0)&&(matricula.length === 6)){

		var estudiante = {
		 "registration_number": matricula,
		 "name": mombre,
		 "last_name": apellido,
		 "status": status
		};

		$.ajax({
			 url: "https://andreihelo-restful-api.herokuapp.com/students",
			 method: "POST",
			 data: estudiante,
			 success: function(result, status, xhr) {
				 alert("Registrado con exito");
				 abrir();
				 //refrescar();
		}
});
	 });

	 $("#cerrar").click(function(){
		 $("#cuadros").animate({
		 margin: "70px auto"
		 }, 500 );
		 $("#mostrar").fadeOut( "slow" );
	 });



/*$("#borrar").click(function() {
	$.ajax({
    url: "https://andreihelo-restful-api.herokuapp.com/students",
    type: 'DELETE',
    success: function(result, status, xhr) {
        // Do something with the result
    }
});
});*/

	});
