$("#button").click(function () {
	alert("Your data is being processed... please wait while we file your information.");
	const name = $("#name").val();
	const favoriteFood = $("#favoriteFood").val();
	const favoriteColor = $("#favoriteColor").val();
	console.log(name, favoriteFood, favoriteColor);
	$("table").append("<tr><td>"+name+"</td><td>"+favoriteFood+"</td><td>"+favoriteColor+"</td></tr>")
});