$(document).ready(

function(){
alert("ヴァラのぺーじです。\nよろしくお願いし。\nこれはアラートです。");

$("#cargar").click(function(){

	alert("quibo");
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

	 $("#crear").click(function(){
			 /*$.post("https://andreihelo-restful-api.herokuapp.com/students", {registration_number: 259605,name: "Kitaro",last_name: "Gegege",status: "°o°"}, "json", function(result){
		         $("span").text(JSON.stringify(result))
		     });
		 	*/
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
