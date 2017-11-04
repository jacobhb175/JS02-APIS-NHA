// $(get the page element with jQuery).click(run this function)

$("#button").click(function () {	
	let input = $("#inputInt").val();
	for (i = 0; i > -1; i--) {
		console.log(input, i);
		$("p").html(input);
		if (i == 0) {
			alert("Blast Off!")
		}
	};
});