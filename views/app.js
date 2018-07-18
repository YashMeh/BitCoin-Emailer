$(document).ready(function(){

	$('#submit').on('click',function(){
		var name=$('#nameholder').val()
		var email=$('#emailholder').val()
		var price=$('#priceholder').val()
		// $.ajax({
		// 	method:"POST",
		// 	url:"/api/users",
		// 	data:{name:name,email:email,price:price}
		// }).done(function(p){
		// 	console.log("SUccess!!");
		// 	$('#nameholder').val("")
		// 	$('#emailholder').val("")
		// 	$('#priceholder').val("")
		// 	$('#errorhandler').text("Success");

		// }).fail(function(err){
		// 	console.log(err);
		// })
		if ((email.indexOf('@gmail.com')>-1) && (name.length!=0) && (price.length!=0)) {
			send(name,email,price);
		 }
		else{
			alert("Enter Valid Information")
			$('#nameholder').val("")
			$('#emailholder').val("")
			$('#priceholder').val("")
		}
		
	
	})
})

function send(name,email,price){
	$.ajax({
			method:"POST",
			url:"/api/users",
			data:{name:name,email:email,price:price}
		}).done(function(p){
			console.log("SUccess!!");
			// $('#nameholder').val("")
			// $('#emailholder').val("")
			// $('#priceholder').val("")
			$('#submit').fadeOut();
			$('.subbox').fadeOut();
			$('.after').fadeIn();
			

		}).fail(function(err){
			console.log(err);
		})
	
}