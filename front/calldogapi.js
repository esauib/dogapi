var url = "http://localhost:3300/api/dogapi";

function postDog(){
	console.log(url);
	
	var myImage = $('#image').val();
	
	var mydog = {
		image: myImage
	};
console.log(mydog);

$.ajax({
	url: url,
	type: 'post',
	dataType: 'json',
	contentType: 'application/json',
	sucess: function (data) {
		console.log(data);
		$('#resultado').html(JSON.stringify(data.Dog));
	},
	data: JSON.stringify(mydog)
});
}

function getDogs() {
	console.log(url);
	
	$.getJSON(url,
	function(json) {
		console.log(json);
		
		var arrUsers = json.users;
		
		var htmlTableDogs = '<table border=1>';
		
		arrUsers.forEach(function(item) {
			console.log(item);
			htmlTableDogs += '<tr>' +
			
				'<td> <img src="'+item.image+'"></td>' +
			'</tr>';
		});
		
		htmlTableDogs += '</table>';
		
		$('#resultado').html(htmlTableDogs);
	}
    );
}
