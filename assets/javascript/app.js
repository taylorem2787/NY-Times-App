
// FUNCTIONS: ==========================
	$('#searchBtn').on('click', function(){
	searchTermVar = document.getElementById('searchTerm').value
	searchNumVar = document.getElementById('searchNum').value
	startYearVar = document.getElementById('startYear').value
	endYearVar = document.getElementById('endYear').value
	})


// AJAX Calls: =========================
// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({'api-key': "1ef9c0fa0174486cb945ea26a3f9d691"});

$.ajax({url: url, method: 'GET',}).done(function(result) {

	console.log(result);



	var searchTerm = $('#searchTerm').;
	// console.log("search term: " + searchTerm);

	// var queryURL = url + "&q=" + searchTerm;
	// console.log("queryURL: " + queryURL);

	// var searchNumber = $('#searchNum').val().trim();
	// console.log("search number: " + searchNumber);

	 var startYear = $("#startYear").val().trim();
	 var 
	// console.log("start year: " + startYear);

	// var endYear = $("#endYear").val().trim();
	// console.log("end year: " + endYear);



	}).fail(function(err) {
  	throw err;

	

});