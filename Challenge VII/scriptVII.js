$("#button").click(function () {
	const i = $("#inputInt").val();
	console.log(inputInt);
	$("p").append(inputInt)
	for ( i > 0; i--){
    	alert(i);
    	if(i === 0){
    		alert("Blast Off!");
    		i = 10
    	});
	});
});