prophecies_url = "http://sf-pyw.mosyag.in/m04/api/forecasts"


$("#id1").click(function() {
	
	$.getJSON(prophecies_url, function(data){
		paragraphs = data["prophecies"]
		set_content_in_divs(paragraphs);
	});
});

function set_content_in_divs() {
	$.each(paragraphs, function(i, d){
		p = $("#p-" + i)
		p.html("<p>" + d + "</p>")
	})
}