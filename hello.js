$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/3"
    }).then(function(data) {
		$('.korisnickiid').append(data.userId);
		$('.id').append(data.id);
        $('.naslov').append(data.title);
		$('.telo').append(data.body);
    });
});