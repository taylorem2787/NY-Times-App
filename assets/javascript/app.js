// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({'api-key': "1ef9c0fa0174486cb945ea26a3f9d691"});

$.ajax({url: url, method: 'GET',}).done(function(result) {

	console.log(result);

	}).fail(function(err) {
  	throw err;

	
	var searchTerm = $('#search-term').val().trim();



});

	$('#searchBtn').on('click', function(){
	searchTermVar = document.getElementById('searchTerm').value
	searchNumVar = document.getElementById('searchNum').value
	startYearVar = document.getElementById('startYear').value
	endYearVar = document.getElementById('endYear').value
	console.log(searchTermVar)
	console.log(searchNumVar)
	console.log(startYearVar)
	console.log(endYearVar)
	
	})