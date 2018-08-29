/*Inicialiacion de jquery*/
$(document).ready(function(){
	var boton = $("#botonBuscar");
	var inputUser = $("#username")

	boton.on("click",function(){
		ajaxAsync();
	})

	function ajaxAsync(){
		var URL = "https://api.github.com/users/"	;
		var userName = inputUser.val().trim().toLowerCase();
		if (username !== "") {/*Si el valor del campo es diferente a vacion*/
			var URLUser = URL + userName;

			$.ajax({
				url:URLUser,/*la url concatenada*/
				type:"GET",/*peticion de tipo get*/
				async:true,/*Si la peticion sera asincronica*/
				success: function(response){/*Es el callback*/
					var data = response
					if (data.message && data.message == "Not Found") {
						alert("El usuario no es existente en github")
					}else{
						$("img").attr("src",data.avatar_url) /*Llenar en los campos los datos respectivos del usuario del github*/
						$(espacioName).text("Bienvenido señor " + data.name);
						$(".name").text(data.name)
						$(".username").text(data.login)
						$(".email").text(data.email)
						$(".company").text(data.company)
						$(".location").text(data.location)
						$(".followers").text(data.followers)
						boton.css("background","green")
					}
				}
			})
		}else{
			alert("Debes ingresar un usuario valido");
		}
	}

})
