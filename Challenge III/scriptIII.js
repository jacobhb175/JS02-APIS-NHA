$("#Submit").click(function () {
	alert("Your data is being processed... please wait while we file your information.");
	const politicalAllegiance = $("#politicalAllegiance").val();
	const citizenship = $("#citizenship").val();
	console.log(politicalAllegiance, citizenship);
	$("p").append(politicalAllegiance, citizenship)
});