$(() => {
  var url = 'http://api.themoviedb.org/3/search/movie?api_key=8990436c90718240a2f238e1d25d0526&query=totoro';

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json'
	}).done(result => console.log(result));

});
